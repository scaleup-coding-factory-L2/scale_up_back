import { Router } from 'express'

import { getHello } from '../controllers/HelloController'
import { uploadSyllabus, getSubjects, getNeed, getOffers } from '../controllers/UploadController'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = Router();

router.get('/', getHello);

router.get('/getSubjects', getSubjects);
router.get('/getOffers', getOffers);
router.get('/getNeed', getNeed);

router.post('/uploadSyllabus', uploadSyllabus);

export default router
