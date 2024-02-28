import { Request, Response } from 'express'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export const getHello = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hello World!' })
}

export const addName = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const newUser = await prisma.test.create({
            data: {
                name,
            },
        });
        res.status(200).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Failed to create user' });
    }
};

export const getNames = async (req: Request, res: Response) => {
    try {
        const users = await prisma.test.findMany();
        res.status(200).json({ message: 'Users fetched successfully', users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Failed to fetch users' });
    }
}

export const deleteName = async (req: Request, res: Response) => {
    try {
        const { name } = req.params;
        const user = await prisma.test.delete({
            where: {
                name,
            },
        });
        res.status(200).json({ message: 'User deleted successfully', user });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Failed to delete user' });
    }
}

export const getAllNames = async (req: Request, res: Response) => {
    try {
        const users = await prisma.test.findMany();
        res.status(200).json({ message: 'Users fetched successfully', users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Failed to fetch users' });
    }
}
