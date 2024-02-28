import { Router } from 'express'

import { getAllSubject, getTestSubject, createSubject, deleteSubject, updateSubject } from '../controllers/SubjectController'

const router = Router()

router.get('/subject', getAllSubject);
router.post('/subject', createSubject);
router.put('/subject/:id', updateSubject);
router.delete('/subject/:id', deleteSubject);
router.get('/subject/test', getTestSubject)

export default router

