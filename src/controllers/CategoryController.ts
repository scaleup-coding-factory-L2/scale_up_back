import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express'

const prisma = new PrismaClient();

export const getAllCategory = async (req: Request, res: Response) => {
  const categories = await prisma.category.findMany();
  res.status(200).json(categories);
};


export const getCategoryBySubjectId = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findMany({
      where: {
        id: parseInt(id)
      }
    });

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  const newCategory = await prisma.category.create({
    data: {
      name
    },
  });
  res.status(200).json(newCategory);
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
  res.status(200).json(updatedCategory);
};

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.category.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.status(200).json({ message: 'Category deleted successfully' });
};



