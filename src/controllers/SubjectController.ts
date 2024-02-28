/*
model Subject {
  id Int @id @default(autoincrement())
  name String
  level String
  category String
  syllabus Syllabus[]
  needs Need[]
  hourlyRates HourlyRate[]
}*/ 
import { Request, Response } from 'express'
import { prisma } from 'index';

export const getAllSubject = async (req: Request, res: Response) => {
  const subjects = await prisma.subject.findMany();
  res.status(200).json(subjects);
};
export const getTestSubject = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello subject!' })
}

export const createSubject = async (req: Request, res: Response) => {
  const { name, level ,category} = req.body;
  const newSubject = await prisma.subject.create({
    data: {
      name,
      level,
      categoryId,
    },
  });
  res.status(200).json(newSubject);
};

export const updateSubject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, level, categoryId } = req.body;

  const existingSubject = await prisma.subject.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!existingSubject) {
    return res
      .status(404)
      .json({ error: `La matière/module à mettre à jour n'existe pas.` });
  }

  const existingCategory = await prisma.category.findUnique({
    where: {
      id: parseInt(categoryId),
    },
  });

  if (!existingCategory) {
    return res.status(404).json({
      error: `La category que vous voulez utilisé pour mettre la matière/module à jour n'existe pas.`,
    });
  }

  const updatedSubject = await prisma.subject.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
      level,
      categoryId,
    },
  });
  res.status(200).json(updatedSubject);
};

export const deleteSubject = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.subject.delete({
    where: {
      id: parseInt(id),
    },
  });

  if (!existingSubject) {
    return res.status(404).json({ error: `La matière/module à supprimer n'existe pas.` });
  }

    await prisma.subject.delete({
      where: {
        id: parseInt(id),
      },
    });
    res
      .status(200)
      .json({ message: "Le module a été correctement supprimé !" });
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la suppression du module.",
    });
  }
};
