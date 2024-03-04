
import { Router } from 'express';
import { body, param } from 'express-validator';
import { getAllSubjects, createSubject, deleteSubject, updateSubject, getSubjectsByCategoryId } from '../controllers/SubjectController';

const router = Router();

router.get('/', getAllSubjects);
router.post('/', [
  body('name').notEmpty().withMessage('Le nom est obligatoire'),
  body('name').isLength({ min: 5, max: 20 }).withMessage('La longueur doit être entre 5 et 20 caractères pour le name de la matière/module'),
  body('level').notEmpty().withMessage('Le level est obligatoire'),
  body('level').isLength({ min: 5, max: 20 }).withMessage('La longueur doit être entre 5 et 20 caractères pour le level de la matière/module'),
  body('categoryId').isInt().withMessage(`L'id de la catégorie est invalide`),
], createSubject);

router.put('/:id', [
  param('id').isInt().withMessage(`L'id de la matière est invalide`),
  body('name').notEmpty().withMessage('Le nom est obligatoire'),
  body('name').isLength({ min: 5, max: 20 }).withMessage('La longueur doit être entre 5 et 20 caractères pour le name de la catégorie'),
  body('level').notEmpty().withMessage('Le level est obligatoire'),
  body('level').isLength({ min: 5, max: 20 }).withMessage('La longueur doit être entre 5 et 20 caractères pour le level de la matière/module'),
  body('categoryId').isInt().withMessage(`L'id de la catégorie est invalide`),
], updateSubject);

router.delete('/:id', [
  param('id').isInt().withMessage(`L'id de la matière/module est incorrect`),
], deleteSubject);

router.get('/:id', [
  param('id').isInt().withMessage(`L'id de la matière/module est incorrect`),
], getSubjectsByCategoryId);

export default router;
