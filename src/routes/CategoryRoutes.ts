import { Router } from 'express'

import { getAllCategories,  createCategory, deleteCategory, updateCategory,getCategoryBySubjectId } from '../controllers/CategoryController'

const router = Router()

router.get('/', getAllCategories);
router.post('/category', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);
router.get('/category/:id', getCategoryBySubjectId);

export default router

