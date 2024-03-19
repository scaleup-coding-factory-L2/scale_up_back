import { Request, Response } from 'express';
import {
    selectQuotation as selectQuotationMiddleware,
    updateQuotationStatus as updateQuotationStatusMiddleware,
    selectAllQuotations as selectAllQuotationsMiddleware,
    deleteQuotation as deleteQuotationMiddleware,
    updateQuotation as updateQuotationMiddleware
} from '../middlewares/QuotationMiddelwares';

export const selectQuotation = async (req: Request, res: Response) => {
  return selectQuotationMiddleware(req, res);
};

export const updateQuotationStatus = async (req: Request, res: Response) => {
  return updateQuotationStatusMiddleware(req, res);
};

export const selectAllQuotations = async (req: Request, res: Response) => {
  return selectAllQuotationsMiddleware(req, res);
};

export const deleteQuotation = async (req: Request, res: Response) => {
  return deleteQuotationMiddleware(req, res);
};

export const updateQuotation = async (req: Request, res: Response) => {
  return updateQuotationMiddleware(req, res);
};

