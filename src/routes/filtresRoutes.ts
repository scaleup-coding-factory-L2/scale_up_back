import express, { Request, Response } from 'express';
import { createNeed } from '../controllers/needController';
import {getAll} from '../controllers/filtresController';


const router = express.Router();

router.post('/need', async (req: Request, res: Response) => {
  const { userUUID, idPromotion } = req.body;

  if (!userUUID || !idPromotion) {
    return res.status(400).json({ error: 'Missing userUUID or idPromotion' });
  }

  try {
    const users = await createNeed(userUUID, idPromotion);
    return res.json(users);
  } catch (error) {
    console.error('Error creating need:', error);
    return res.status(500).json({ error: 'Failed to create need' });
  }
});

export default router;

router.post('/getall", getAll);
