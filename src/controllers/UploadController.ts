import { PrismaClient, User } from '@prisma/client';
import { Request, Response } from 'express'

const prisma = new PrismaClient();

let syllabusPath = '';

interface Syllabus {
    subjectId: number,
    authorId: number,
    offerId: number,
    fileName: string,
    file: object,
    createdAt: Date,
    user: User
}

interface MulterRequest extends Request {
    file: {
        path: string
    },
    body: {
        offerID: string
    }
}

export const uploadSyllabus = async (req: Request, res: Response) => {
    const d: Syllabus = req.body
    if(syllabusPath != '') {
        const syllabus = await prisma.syllabus.create({
            data: {
                subjectId: d.subjectId,
                authorId: d.authorId,
                offerId: d.offerId,
                file: syllabusPath,
                createdAt: d.createdAt,
            }
        })
        res.status(200).json(syllabus)
    } else {
        res.status(500).send('Path not found');
    }
}

export const uploadSyllabusFile = async (req: Request, res: Response) => {
    syllabusPath = (req as MulterRequest).file.path
    res.status(200).send('ok')
}

export const uploadPTF = async (req: Request, res: Response) => {
    const ptfPath = (req as MulterRequest).file.path
    const offerID = (req as MulterRequest).body.offerID

    await prisma.offer.update({
        where: {
          id: parseInt(offerID),
        },
        data: {
          ptf: ptfPath,
        },
      })
    res.status(200).send('ok')
}

export const getSubjects = async (req: Request, res: Response) => {
    try {
        const needId = req.url.split('needId=', 2);
        console.log(needId)
        const result = await prisma.subject.findMany({
            select: {
                _count: {
                    select: {
                        needs: { where: { id: parseInt(needId[1]) } }
                    }
                },
                id: true,
                name: true,
            }
        });
        res.json(result);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
}


export const getOffers = async (req: Request, res: Response) => {
    try {
        const result = await prisma.offer.findMany({
            select: {
                id: true,
                needId: true
            }
        });
        res.json(result);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
}


export const getNeed = async (req: Request, res: Response) => {
    try {
        const result = await prisma.need.findUnique({
            where: {
                id: req.body.needId
            },
            select: {
                id: true,
                idSubject: true
            }
        });
        res.json(result);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
}
