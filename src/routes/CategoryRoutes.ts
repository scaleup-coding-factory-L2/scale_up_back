import { Router } from 'express'

import { getAllCategories,  createCategory, deleteCategory, updateCategory,getCategoryBySubjectId } from '../controllers/CategoryController'

const router = Router()

router.get('/category', getAllCategories);
router.post('/category', createCategory);
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);
router.get('/category/:id', getCategoryBySubjectId);

export default router

