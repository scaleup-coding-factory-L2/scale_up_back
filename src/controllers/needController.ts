import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createNeed(userUUID: string, idPromotion: number) {
  try {
    const users = await prisma.need.findMany({
      where: {
        idPromotion: idPromotion,
      },
    });
    
    return users;
  } catch (error) {
    console.error('Error creating or finding users:', error);
    throw new Error('Failed to create or find users');
  }
}
