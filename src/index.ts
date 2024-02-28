import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import helloRoutes from './routes/helloRoutes'
import subjectRoutes from './routes/SubjectRoutes'
import categoryRoutes from './routes/CategoryRoutes'


import morgan from 'morgan'

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api', helloRoutes)
app.use('/sub', subjectRoutes)
app.use('/cat', categoryRoutes)

export { app }
