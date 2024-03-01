import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createNotif (body) {
  const newNotif = await prisma.notificationSettings.create({
    data: body

  });
  return newNotif;
}
