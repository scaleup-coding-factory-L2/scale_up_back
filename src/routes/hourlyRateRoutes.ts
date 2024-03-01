import { Router } from 'express'

import { addHourlyRate, getAllHourlyRates, getHourlyRateById, updateHourlyRate, getAllSubjectsNames, updateHourlyRateRealRate} from '../controllers/HourlyRatesController'

const router = Router()

router.post('/addHourlyRate', addHourlyRate)
router.get('/getAllHourlyRates', getAllHourlyRates)
router.get('/getHourlyRateById/:id', getHourlyRateById)
router.put('/updateHourlyRate/:id', updateHourlyRate)
router.get('/getAllSubjectsNames', getAllSubjectsNames)
router.put('/updateHourlyRateRealRate/:id', updateHourlyRateRealRate)

export default router
