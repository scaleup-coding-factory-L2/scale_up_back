import { Router } from "express";

import { getUserCompany } from "@/controllers/UserController";

const router = Router();

router.get("/:id/contributors", getUserCompany);

export default router;
