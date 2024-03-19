import { Request, Response } from 'express';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


export const selectQuotation = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const quotation = await prisma.quotation.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        if (quotation) {
            res.status(200).json({ message: 'Quotation fetched successfully' });
        } else {
            res.status(404).json({ message: 'Quotation not found' });
        }
    } catch (error) {
        console.error('Error fetching quotation:');
        res.status(500).json({ message: 'Failed to fetch quotation' });
    }
}

export const updateQuotationStatus = async (req: Request, res: Response) => {
    try {
        const { id, status } = req.body;
        const updatedQuotation = await prisma.quotation.update({
            where: {
                id: parseInt(id),
            },
            data: {
                status,
            },
        });
        res.status(200).json({ message: 'Quotation status updated successfully' });
    } catch (error) {
        console.error('Error updating quotation status');
        res.status(500).json({ message: 'Failed to update quotation status' });
    }
}

export const selectAllQuotations = async (req: Request, res: Response) => {
    try {
        const quotations = await prisma.quotation.findMany();
        res.status(200).json({ message: 'Quotations fetched successfully', quotations });
    } catch (error) {
        console.error('Error fetching quotations:');
        res.status(500).json({ message: 'Failed to fetch quotations' });
    }
}