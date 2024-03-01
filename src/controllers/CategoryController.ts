import { Request, Response } from 'express'
import { prisma } from '../index'

export const getAllCategories = async (req: Request, res: Response) => {
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
    res.status(500).json({ error: 'Erreur de serveur interne. Veuillez réessayer plus tard.' });
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
  try {
    const { id } = req.params;
    await prisma.category.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({ message: 'La catégorie a été correctement supprimée !' });
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors de la suppression de la catégorie.' });
  }
};



