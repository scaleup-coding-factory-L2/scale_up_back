import { Request, Response } from 'express'

const multer  = require('multer')

interface MulterRequest extends Request {
    files: [];
}

export const uploadPDF = (req: Request, res: Response) => {
    console.log((req as MulterRequest).files)
    res.status(200).json({ message: 'Upload!' })
}
