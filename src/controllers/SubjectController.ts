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
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllSubject = async (req, res) => {
  const subjects = await prisma.subject.findMany();
  res.json(subjects);
};

const createSubject = async (req, res) => {
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

const updateSubject = async (req, res) => {
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

const deleteSubject = async (req, res) => {
  const { id } = req.params;
  await prisma.subject.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.json({ message: 'Subject deleted successfully' });
};

module.exports = {
    getAllSubject,
    createSubject,
    updateSubject,
    deleteSubject,
};

