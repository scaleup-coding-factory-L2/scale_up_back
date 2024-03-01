import { Router } from 'express'

import { addHourlyRate, getAllHourlyRates, getHourlyRateById, updateHourlyRate, getAllSubjectsNames, updateHourlyRateRealRate, deleteHourlyRate} from '../controllers/HourlyRatesController'

const router = Router()

router.post('/addHourlyRate', addHourlyRate)
router.get('/getAllHourlyRates', getAllHourlyRates)
router.get('/getHourlyRateById/:id', getHourlyRateById)
router.put('/updateHourlyRate/:id', updateHourlyRate)
router.get('/getAllSubjectsNames', getAllSubjectsNames)
router.put('/updateHourlyRateRealRate/:id', updateHourlyRateRealRate)
router.delete('/deleteHourlyRate/:id', deleteHourlyRate)


export default router
