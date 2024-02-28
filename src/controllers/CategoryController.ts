/*
model Category {
  id Int @id @default(autoincrement())
  name String
  subjects Subject[]
}
}*/ 
import {PrismaClient } from '@prisma/client';
import { Request, Response } from 'express'

const prisma = new PrismaClient();

export const getAllCategory = async (req: Request, res: Response) => {
  const categorys = await prisma.category.findMany();
  res.json(categorys);
};
export const getTestCategory = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello category!' })
}

export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  const newCategory = await prisma.category.create({
    data: {
      name
    },
  });
  res.json(newCategory);
};

export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const updatedCategory = await prisma.category.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name
    },
  });
  res.json(updatedCategory);
};

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.category.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.json({ message: 'Category deleted successfully' });
};



