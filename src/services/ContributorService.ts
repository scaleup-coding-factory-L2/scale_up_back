import { prisma } from "@/prisma";

export async function getContributorsByUserId(companyId: number) {
  return await prisma.contributor.findMany({
    where: {
      companyId: {
        equals: companyId,
      },
    },
  });
}
