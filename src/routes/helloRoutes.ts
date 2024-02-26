import { Router } from 'express'

import { getHello } from '../controllers/HelloController'
import { uploadPDF } from '../controllers/UploadController'

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const router = Router()

router.get('/', getHello)

const cpUpload = upload.fields([{ name: 'ptf', maxCount: 1 }, { name: 'syllabus', maxCount: 1 }])
router.post('/uploadPDF', cpUpload, uploadPDF)

export default router
