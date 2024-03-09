import { Request, Response } from "express";

import {
  createContributor,
  deleteContributorById,
} from "@/services/ContributorService";

export const addContributor = async (req: Request, res: Response) => {
  const contributor = req.body;

  const newContributor = await createContributor(contributor);

  res.json(newContributor);
};

export const removeContributor = async (req: Request, res: Response) => {
  const contributorId = req.params.id;

  const deletedContributor = await deleteContributorById(Number(contributorId));

  res.json(deletedContributor);
};
