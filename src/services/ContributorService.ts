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

export async function deleteContributorById(contributorId: number) {
  return await prisma.contributor.delete({
    where: {
      id: contributorId,
    },
  });
}
