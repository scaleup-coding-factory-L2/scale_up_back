import { Router } from 'express'
import { getNeeds, getNeedsByYear , createNeed, deleteNeed } from '../controllers/NeedController'

const router = Router()

router.get('/', getNeeds)
router.get('/:year', getNeedsByYear)
router.post('/', createNeed);
router.delete('/:id', deleteNeed);

export default router