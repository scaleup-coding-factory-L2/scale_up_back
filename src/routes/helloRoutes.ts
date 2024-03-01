import express, { Router } from 'express';
import { getHello } from '../controllers/HelloController';

const router: Router = express.Router();

router.get('/', getHello);
export default router;
