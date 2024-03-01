import { Request, Response } from "express";

import { getContributorsByUserId } from "@/services/ContributorService";

export const getCompanyContributors = async (req: Request, res: Response) => {
  const companyId: string = req.params.id;

  const company = await getContributorsByUserId(Number(companyId));

  res.json(company);
};
