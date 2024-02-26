import { Request, Response } from 'express'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export const getHello = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hello World!' })
}

export const getName = async (req: Request, res: Response) => {
    const adduser  = await prisma.test.create({
        data: {
            name: req.body.name,
        },
    })
}