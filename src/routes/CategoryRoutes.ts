import { Router } from 'express'

import { getAllCategory, getTestCategory, createCategory, deleteCategory, updateCategory,getCategoryeBySubjectId } from '../controllers/CategoryController'

const router = Router()

router.get('/category', getAllCategory);
router.post('/category', createCategory);
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);
router.get('/category/test', getTestCategory);
router.get('/category/:id',getCategoryeBySubjectId);

export default router

