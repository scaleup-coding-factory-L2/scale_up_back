import { Router } from 'express'

import { getAllSubject,  createSubject, deleteSubject, updateSubject,getSubjectsByCategoryId } from '../controllers/SubjectController'

const router = Router()

router.get('/subject', getAllSubject);
router.post('/subject', createSubject);
router.put('/subject/:id', updateSubject);
router.delete('/subject/:id', deleteSubject);
router.get('/subject/:id',getSubjectsByCategoryId)

export default router

