import { Router } from 'express'

import { selectQuotation } from '../controllers/QuotationController'

const router = Router()

router.get('/selectQuotation/:id', selectQuotation)

export default router