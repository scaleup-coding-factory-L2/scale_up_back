import { Request, Response } from 'express';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const addHourlyRate = async (req: Request, res: Response) => {
    try {
        const { level, subjectId, rate, realrate } = req.body;
        const newHourlyRate = await prisma.hourlyRate.create({
            data: {
                level,
                subjectId,
                rate,
                realrate,
            },
        });
        res.status(200).json({ message: 'Hourly rate created successfully', hourlyRate: newHourlyRate });
    } catch (error) {
        console.error('Error creating hourly rate');
        res.status(500).json({ message: 'Failed to create hourly rate' });
    }
};

export const getAllHourlyRates = async (req: Request, res: Response) => {
    try {
        const hourlyRates = await prisma.hourlyRate.findMany();
        res.status(200).json({ message: 'Hourly rates fetched successfully', hourlyRates });
    } catch (error) {
        console.error('Error fetching hourly rates:');
        res.status(500).json({ message: 'Failed to fetch hourly rates' });
    }
};

export const getHourlyRateById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const hourlyRate = await prisma.hourlyRate.findUnique({
            where: {
                id,
            },
        });
        if (hourlyRate) {
            res.status(200).json({ message: 'Hourly rate fetched successfully', hourlyRate });
        } else {
            res.status(404).json({ message: 'Hourly rate not found' });
        }
    } catch (error) {
        console.error('Error fetching hourly rate:');
        res.status(500).json({ message: 'Failed to fetch hourly rate' });
    }
};

export const updateHourlyRate = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const { level, subjectId, rate, realrate } = req.body;
        const updatedHourlyRate = await prisma.hourlyRate.update({
            where: {
                id,
            },
            data: {
                level,
                subjectId,
                rate,
                realrate,
            },
        });
        res.status(200).json({ message: 'Hourly rate updated successfully', hourlyRate: updatedHourlyRate });
    } catch (error) {
        console.error('Error updating hourly rate:');
        if (error.code === 'P2025') {
            res.status(404).json({ message: 'Hourly rate not found' });
        } else {
            res.status(500).json({ message: 'Failed to update hourly rate' });
        }
    }
};

export const updateHourlyRateRealRate = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const { realrate } = req.body;
        const updatedHourlyRate = await prisma.hourlyRate.update({
            where: {
                id,
            },
            data: {
                realrate,
            },
        });
        res.status(200).json({ message: 'Hourly rate updated successfully', hourlyRate: updatedHourlyRate });
    } catch (error) {
        console.error('Error updating hourly rate:');
        if (error.code === 'P2025') {
            res.status(404).json({ message: 'Hourly rate not found' });
        } else {
            res.status(500).json({ message: 'Failed to update hourly rate' });
        }
    }
}

export const deleteHourlyRate = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        await prisma.hourlyRate.delete({
            where: {
                id,
            },
        });
        res.status(200).json({ message: 'Hourly rate deleted successfully' });
    } catch (error) {
        console.error('Error deleting hourly rate:');
        if (error.code === 'P2025') {
            res.status(404).json({ message: 'Hourly rate not found' });
        } else {
            res.status(500).json({ message: 'Failed to delete hourly rate' });
        }
    }
}

export const getAllSubjectsNames = async (req: Request, res: Response) => {
    try {
        const subjects = await prisma.Subject.findMany();
        const subjectsData = subjects.map(({ id, name }) => ({ id, name }));
        res.status(200).json({ message: 'Subjects fetched successfully', subjects: subjectsData });
    } catch (error) {
        console.error('Error fetching subjects:');
        res.status(500).json({ message: 'Failed to fetch subjects' });
    }
};