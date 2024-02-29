import { Request, Response } from "express";

import { createContributor } from "@/services/ContributorService";

export const addContributor = async (req: Request, res: Response) => {
  const contributor = req.body;

  const company = await createContributor(contributor);

  res.json(company);
};
