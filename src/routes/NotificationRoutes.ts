import { Router } from 'express'

import { getAllNotification, createNotification, deleteNotification, updateNotification, getTestNotification, getUserNotification } from '../controllers/NotificationController'

const router = Router()

router.get('/notification', getAllNotification);
router.post('/notification', createNotification);
router.get('/notification/:id', getUserNotification);
router.put('/notification/:id', updateNotification);
router.delete('/notification/:id', deleteNotification);
router.get('/notification/test', getTestNotification)

export default router