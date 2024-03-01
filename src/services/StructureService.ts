import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getStructureByUserId(userId: number) {
  return await prisma.company.findFirst({
    where: {
      userId: {
        equals: userId,
      },
    },
  });
}
