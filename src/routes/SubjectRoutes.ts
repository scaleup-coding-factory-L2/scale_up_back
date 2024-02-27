const express = require('express');
const router = express.Router();
const SubjectController = require('../controllers/SubjectController');

router.get('/subject', SubjectController.getAllSubject);
router.post('/subject', SubjectController.createSubject);
router.put('/subject/:id', SubjectController.updateSubject);
router.delete('/subject/:id', SubjectController.deleteSubject);

module.exports = router;
