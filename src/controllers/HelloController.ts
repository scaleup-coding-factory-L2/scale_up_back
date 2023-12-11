import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';


export const getHello = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hello World!' });
};

const prisma = new PrismaClient();

/**
 * Adds an hourly rate to the database.
 * 
 * @param req - The request object.
 * @param res - The response object.
 * @returns A JSON response containing the newly created hourly rate.
 */
export const addHourlyRate = async (req: Request, res: Response) => {
    const { level_of_study, rate, costs } = req.body;
    try {
        const hourlyRate = await prisma.hourlyrates.create({
            data: {
                level_of_study,
                rate,
                costs,
                id_budget: 1000,
                id_subject: 1000, 
            },
        });
        res.status(201).json(hourlyRate);
    } catch (error) {
        console.error('Failed to add hourly rate', error);
        res.status(500).json({ error: "Unable to create hourly rate" });
    }
};
