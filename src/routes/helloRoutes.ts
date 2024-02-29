import { Router } from 'express'

import { getHello } from '../controllers/HelloController'
import { uploadSyllabus, uploadSyllabusFile, getSubjects, getNeed, getOffers } from '../controllers/UploadController'

const router = Router();

const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/', getHello);

router.get('/getSubjects', getSubjects);
router.get('/getOffers', getOffers);
router.get('/getNeed', getNeed);

router.post('/uploadSyllabusFile', upload.single('syllabus'), uploadSyllabusFile);
router.post('/uploadSyllabus', uploadSyllabus);

export default router
