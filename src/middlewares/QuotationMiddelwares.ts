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
            res.status(200).json({ message: 'Quotation fetched successfully', quotation });
        } else {
            res.status(404).json({ message: 'Quotation not found' });
        }
    } catch (error) {
        console.error('Error fetching quotation:');
        res.status(500).json({ message: 'Failed to fetch quotation' });
    }
}