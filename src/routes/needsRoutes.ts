import { Router } from 'express'

import { getNeeds, getNeedsByYear } from '../controllers/NeedController'

const router = Router()

router.get('/', getNeeds)
router.get('/:year', getNeedsByYear)

export default router
