import { Router } from 'express';
import { body, param } from 'express-validator';

import { getAllCategories,  createCategory, deleteCategory, updateCategory,getCategoryById } from '../controllers/CategoryController'

const router = Router()

router.get('/', getAllCategories);

router.post('/',[
    body('name').notEmpty().withMessage('Le nom est obligatoire'),

], createCategory);

router.put('/:id',[  
    param('id').isInt().withMessage(`L'id de la catégorie est invalide`),
    body('name').notEmpty().withMessage('Le nom est obligatoire'),
    body('name').isLength({ min: 5, max: 20 }).withMessage('La longueur doit être entre 5 et 20 caractères pour le name de la catégorie'),
], updateCategory);

router.delete('/:id',[  
    param('id').isInt().withMessage(`L'id de la catégorie est invalide`)
], deleteCategory);
router.get('/:id',[  
    param('id').isInt().withMessage(`L'id de la catégorie est invalide`)
], getCategoryById);

export default router
