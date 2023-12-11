import { Router } from 'express'
import { getHello, addHourlyRate } from '../controllers/HelloController'

const router = Router()

router.get('/', getHello)
router.post('/addhourlyrates', addHourlyRate);

export default router
