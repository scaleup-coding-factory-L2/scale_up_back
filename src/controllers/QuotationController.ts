import { Request, Response } from 'express';
import {selectQuotation as selectQuotationMiddleware} from '../middlewares/QuotationMiddelwares';

export const selectQuotation = async (req: Request, res: Response) => {
  return selectQuotationMiddleware(req, res);
};