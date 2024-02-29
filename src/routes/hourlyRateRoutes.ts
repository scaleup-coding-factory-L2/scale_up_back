import { Router } from 'express'

import { addHourlyRate, getAllHourlyRates, getHourlyRateById, updateHourlyRate } from '../controllers/HourlyRatesController'

const router = Router()

router.post('/addHourlyRate', addHourlyRate)
router.get('/getAllHourlyRates', getAllHourlyRates)
router.get('/getHourlyRateById/:id', getHourlyRateById)
router.put('/updateHourlyRate/:id', updateHourlyRate)

export default router
