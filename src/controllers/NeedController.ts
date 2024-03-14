import { Request, Response } from 'express'
import { prisma } from '../index'

export const getNeeds = async (req: Request, res: Response) => {
    let needs = await prisma.need.findMany().catch((error) => {
        console.error('Error fetching needs:', error)
        res.status(500).json({ error: 'Error fetching needs' })
    })
    res.status(200).json(needs)
}

export const getNeedsByYear = async (req: Request, res: Response) => {
    let year = req.params.year
    let startYears = year.split('-')
    let startYear = startYears[0]
    let endYear = startYears[1]
    let needs = await prisma.need.findMany({
        where: {
            AND: [
                {
                    startSchoolYear: {
                        equals: parseInt(startYear)
                    }
                },
                {
                    endSchoolYear: {
                        equals: parseInt(endYear)
                    }
                }
            ]
        }
    }).catch((error) => {
        console.error('Error fetching needs:', error)
        res.status(500).json({ error: 'Error fetching needs' })
    })
    res.status(200).json(needs)
}

export const createNeed = async (req: Request, res: Response) => {
    const { idSubject, idPromotion, status, idContributor, hoursVolume, startSchoolYear, endSchoolYear } = req.body;

    const newNeed = await prisma.need.create({
        data: {
            idSubject,
            idPromotion,
            status,
            idContributor,
            hoursVolume,
            startSchoolYear,
            endSchoolYear
        }
    }).catch((error) => {
        console.error('Error creating need:', error);
        res.status(500).json({ error: 'Error creating need' });
    });

    res.status(201).json(newNeed);
};

export const deleteNeed = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const deletedNeed = await prisma.need.delete({
        where: {
            id: id
        }
    }).catch((error) => {
        console.error('Error deleting need:', error);
        res.status(500).json({ error: 'Error deleting need' });
    });

    res.status(200).json(deletedNeed);
};