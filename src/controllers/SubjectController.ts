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
import {PrismaClient } from '@prisma/client';
import { Request, Response } from 'express'

const prisma = new PrismaClient();

export const getAllSubject = async (req: Request, res: Response) => {
  const subjects = await prisma.subject.findMany();
  res.json(subjects);
};

export const getSubjectsByCategoryId = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const subjects = await prisma.subject.findMany({
      where: {
        categoryId: parseInt(id)
      }
    });

    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
      category
    },
  });
  res.json(newSubject);
};

export const updateSubject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, level, category } = req.body;
  const updatedSubject = await prisma.subject.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
      level,
      category
    },
  });
  res.json(updatedSubject);
};

export const deleteSubject = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.subject.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.json({ message: 'Subject deleted successfully' });
};



