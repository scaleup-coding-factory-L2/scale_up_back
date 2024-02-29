import { prisma } from "@/prisma";

export async function createContributor(contributor) {
  return await prisma.contributor.create({
    data: contributor,
  });
}

export async function getContributorsByUserId(companyId: number) {
  return await prisma.contributor.findMany({
    where: {
      companyId: {
        equals: companyId,
      },
    },
  });
}
