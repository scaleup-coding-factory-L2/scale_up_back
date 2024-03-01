import { Router } from "express";

import { getUserContracts, getUserStructure } from "../controllers/UserController";

const router = Router();

router.get("/:id/company", getUserStructure);
router.get("/:id/contracts", getUserContracts);


export default router;
