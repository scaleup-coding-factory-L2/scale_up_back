import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import helloRoutes from './routes/helloRoutes'
import needsRoutes from './routes/needsRoutes'
import morgan from 'morgan'
import { PrismaClient } from '@prisma/client'

const app = express()

export const prisma = new PrismaClient()


app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api', helloRoutes)
app.use('/api/needs', needsRoutes)


export { app }
