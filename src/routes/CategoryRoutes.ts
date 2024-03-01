import { Router } from 'express'

import { getAllCategory, getTestCategory, createCategory, deleteCategory, updateCategory } from '../controllers/CategoryController'

const router = Router()

router.get('/category', getAllCategory);
router.post('/category', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);
router.get('/category/:id', getCategoryBySubjectId);

export default router

