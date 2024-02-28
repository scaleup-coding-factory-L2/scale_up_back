import { Request, Response } from "express";

import { getStructureByUserId } from "../services/StructureService";

export const getUserStructure = async (req: Request, res: Response) => {
  // Récupérez l'ID de l'utilisateur de l'URL
  const userId: string = req.params.id;

  const structure = await getStructureByUserId(Number(userId));

  // Renvoyez les informations de l'entreprise en réponse à la demande
  res.json(structure);
};