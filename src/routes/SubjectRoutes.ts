/*import { Router } from 'express'

import { getAllSubject,  createSubject, deleteSubject, updateSubject,getSubjectsByCategoryId } from '../controllers/SubjectController'

const router = Router()

router.get('/subject', getAllSubject);
router.post('/subject', createSubject);
router.put('/subject/:id', updateSubject);
router.delete('/subject/:id', deleteSubject);
router.get('/subject/:id',getSubjectsByCategoryId)

export default router
*/
import { Router } from 'express';
import { body, param } from 'express-validator';
import { getAllSubject, createSubject, deleteSubject, updateSubject, getSubjectsByCategoryId } from '../controllers/SubjectController';
import { validate } from '../middlewares/validationMiddleware';

const router = Router();

router.get('/subject', getAllSubject);

router.post('/subject', [
  body('name').notEmpty().withMessage('Name is required'),
], validate, createSubject);

router.put('/subject/:id', [
  param('id').isInt().withMessage('Invalid subject ID'),
  body('name').notEmpty().withMessage('Name is required'),
], validate, updateSubject);

router.delete('/subject/:id', [
  param('id').isInt().withMessage('Invalid subject ID'),
], validate, deleteSubject);

router.get('/subject/:id', [
  param('id').isInt().withMessage('Invalid category ID'),
], validate, getSubjectsByCategoryId);

export default router;
