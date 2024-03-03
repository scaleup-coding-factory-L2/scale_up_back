import { Router } from 'express';
import { body, param } from 'express-validator';

import { getAllCategories,  createCategory, deleteCategory, updateCategory,getCategoriesBySubjectId } from '../controllers/CategoryController'

const router = Router()

router.get('/category', getAllCategories);

router.post('/category',[
    body('name').notEmpty().withMessage('Le nom est obligatoire'),

], createCategory);

router.put('/category/:id',[  
    param('id').isInt().withMessage(`L'id de la catégorie est invalide`),
    body('name').notEmpty().withMessage('Le nom est obligatoire'),
    body('name').isLength({ min: 5, max: 20 }).withMessage('La longueur doit être entre 5 et 20 caractères pour le name de la catégorie'),
], updateCategory);

router.delete('/category/:id',[  
    param('id').isInt().withMessage(`L'id de la catégorie est invalide`)
], deleteCategory);
router.get('/category/:id',[  
    param('id').isInt().withMessage(`L'id de la catégorie est invalide`)
], getCategoriesBySubjectId);

export default router