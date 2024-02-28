import { Router } from "express";

import { getUserStructure } from "../controllers/UserController";

const router = Router();

router.get("/:id/company", getUserStructure);

export default router;
