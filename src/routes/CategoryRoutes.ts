import { Router } from 'express'

import { getAllCategory,  createCategory, deleteCategory, updateCategory,getCategoryBySubjectId } from '../controllers/CategoryController'

const router = Router()

router.get('/category', getAllCategory);
router.post('/category', createCategory);
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);
router.get('/category/:id', getCategoryBySubjectId);

export default router

