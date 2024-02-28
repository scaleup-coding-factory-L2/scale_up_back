import { Router } from 'express'

import { getAllCategory, getTestCategory, createCategory, deleteCategory, updateCategory } from '../controllers/CategoryController'

const router = Router();

router.get('/category', getAllCategory);
router.post('/category', createCategory);
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);
router.get('/category/test', getTestCategory)

export default router

