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
    let promotion = await prisma.promotion.findMany({
        where: {
            AND: [
                {
                    schoolYear: {
                        equals: parseInt(startYear)
                    }
                },
                {
                    schoolYear: {
                        equals: parseInt(endYear)
                    }
                },
            ]
        }
    }).catch((error) => {
        console.error('Error fetching needs:', error)
        res.status(500).json({ error: 'Error fetching needs' })
    })
    res.status(200).json(promotion)
}

export const getNeedsBySubject = async (req: Request, res: Response) => {
    let year = req.params.year
    let startYears = year.split('-')
    let startYear = startYears[0]
    let endYear = startYears[1]
    let subjects = await prisma.subject.findMany({
        where: {
            level: {
                 equals: req.params.level
            }
        }
    }).catch((error) => {
        console.error('Error fetching needs:', error)
        res.status(500).json({ error: 'Error fetching needs' })
    })
    res.status(200).json(subjects)
}

export const getNeedsByPromotion = async (req: Request, res: Response) => {
    let year = req.params.year
    let startYears = year.split('-')
    let startYear = startYears[0]
    let endYear = startYears[1]
    let promotion = await prisma.promotion.findMany({
        where: {
            AND: [
                {
                    schoolYear: {
                        equals: parseInt(startYear)
                    }
                },
                {
                    schoolYear: {
                        equals: parseInt(endYear)
                    }
                },
            ]
            }
        }
    ).catch((error) => {
        console.error('Error fetching needs:', error)
        res.status(500).json({ error: 'Error fetching needs' })
    })
    res.status(200).json(promotion)
}
