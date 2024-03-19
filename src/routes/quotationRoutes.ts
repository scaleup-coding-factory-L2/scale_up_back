import { Router } from 'express'

import { selectQuotation, updateQuotationStatus } from '../controllers/QuotationController'

const router = Router()

router.get('/selectQuotation/:id', selectQuotation)
router.put('/updateQuotationStatus/:id', updateQuotationStatus)

export default router