/*
model Category {
  id Int @id @default(autoincrement())
  name String
  subjects Subject[]
}
}*/ 
import { Request, Response } from 'express'
import { prisma } from 'index';

export const getAllCategory = async (req: Request, res: Response) => {
  const categories = await prisma.category.findMany();
  res.status(200).json(categories);
};

export const getCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ error: "Catégorie non trouvée" });
    }
  } catch (error) {
    res.status(500).json({
      error: "Erreur de serveur interne. Veuillez réessayer plus tard.",
    });
  }
};
export const getTestCategory = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello category!' })
}

export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  const newCategory = await prisma.category.create({
    data: {
      name,
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
      name,
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
