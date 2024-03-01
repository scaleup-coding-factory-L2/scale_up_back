import { Request, Response } from "express";

import { getCompanyByUserId } from "@/services/CompanyService";
import { getNotificationsByUserId } from "@/services/NotificationService";

export const getUserCompany = async (req: Request, res: Response) => {
  const userId: string = req.params.id;

  const company = await getCompanyByUserId(Number(userId));

  res.json(company);
};

export const getUserNotifications = async (req: Request, res: Response) => {
    const userId: string = req.params.id;
  
    const notifications = await getNotificationsByUserId(Number(userId));
  
    res.json(notifications);
  };
