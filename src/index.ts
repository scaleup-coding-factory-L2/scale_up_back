import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import helloRoutes from './routes/helloRoutes'
import hourlyRateRoutes from './routes/hourlyRateRoutes'
import quotationRoute from './routes/quotationRoutes'
import morgan from 'morgan'

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api', helloRoutes)
app.use('/hourlyRateRoutes', hourlyRateRoutes)
app.use('/quotation', quotationRoute)
export { app }
