import { Request, Response } from 'express';
import {
    selectQuotation as selectQuotationMiddleware,
    updateQuotationStatus as updateQuotationStatusMiddleware
} from '../middlewares/QuotationMiddelwares';

export const selectQuotation = async (req: Request, res: Response) => {
  return selectQuotationMiddleware(req, res);
};

export const updateQuotationStatus = async (req: Request, res: Response) => {
  return updateQuotationStatusMiddleware(req, res);
};