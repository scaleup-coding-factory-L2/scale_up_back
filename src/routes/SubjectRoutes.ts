import { Router } from 'express'
import { getSubjects, getSubjectsByCategory, addSubjectToPromotion } from '../controllers/SubjectController'

const router = Router()

router.get('/', getSubjects)
router.get('/subject/:categoryId', getSubjectsByCategory)
router.post('/addSubjectToPromotion', addSubjectToPromotion)

export default router