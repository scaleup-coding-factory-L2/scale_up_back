import { Request, Response, NextFunction } from 'express';
exports.login = (req: Request, res: Response, next: NextFunction) =>{
    res.status(200).json({message: 'login'})
}