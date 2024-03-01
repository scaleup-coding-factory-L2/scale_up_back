import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import helloRoutes from './routes/helloRoutes'
import morgan from 'morgan'
import userRoutes from './routes/userRoutes'
import notifRoutes from './routes/notifRoutes'

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api', helloRoutes)
app.use('/api/users', userRoutes)
app.use ('/api/notifications', notifRoutes)

export { app }
