/*
model Notifaction {
  id Int @id @default(autoincrement())
  userId number
  title String
  text String;
  category number;
  status number;
  dueDate Date;
  createdAt Date;
  subjects Subject[]
}
}*/ 
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express'

const prisma = new PrismaClient();

export const getTestNotification = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello notification!' })
}

export const getAllNotification = async (req: Request, res: Response) => {
  const notification = await prisma.notification.findMany();
  res.json(notification);
};

export const getUserNotification = async (req: Request, res: Response) => {
  try {
  const { id } = req.params;
  const notification = await prisma.notification.findMany({
    where: {
      userId: parseInt(id),
    }
  });
  res.json(notification);
  res.end;
 }catch (err){
    console.log(err.message);
 }
};

export const createNotification = async (req: Request, res: Response) => {
  const { userId, title, text, category, status, dueDate} = req.body;
  const newNotification = await prisma.notification.create({
    data: {
      userId,
      title,
      text,
      category,    
      status,
      dueDate,
    },
  });

  res.json(newNotification);  
};


export const updateNotification = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId, title, text, category, status, dueDate } = req.body;
  const updatedNotification = await prisma.notification.update({
    where: {
      id: parseInt(id),
    },
    data: {
      userId ,
      title ,
      text ,
      category ,
      status ,
      dueDate 
    },
  });
  res.json(updatedNotification);
};

export const deleteNotification = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.notification.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.json({ message: 'Notification deleted successfully' });
};