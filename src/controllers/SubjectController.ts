import { prisma } from '../index';
import { Request, Response } from 'express'

export const getAllSubjects = async (req: Request, res: Response) => {
  const subjects = await prisma.subject.findMany();
  res.status(200).json(subjects);
};

export const getSubjectsByCategoryId = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const subjects = await prisma.subject.findMany({
      where: {
        categoryId: parseInt(id)
      }
    });

    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ error: 'Erreur de serveur interne. Veuillez réessayer plus tard.' });
  }
};

export const createSubject = async (req: Request, res: Response) => {
  const { name, level ,categoryId} = req.body;
  const newSubject = await prisma.subject.create({
    data: {
      name,
      level,
      categoryId
    },
  });
  res.status(200).json(newSubject);
};

export const updateSubject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, level, categoryId } = req.body;
  const updatedSubject = await prisma.subject.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
      level,
      categoryId
    },
  });
  res.status(200).json(updatedSubject);
};

export const deleteSubject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.subject.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({ message: 'Le module a été correctement supprimé !' });
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors de la suppression du module.' });
  }
};




