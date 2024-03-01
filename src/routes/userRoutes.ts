import { Router } from "express";

import { getUserCompany, getUserNotifications } from "@/controllers/UserController";

const router = Router();

router.get("/:id/company", getUserCompany);
router.get("/:id/notifications", getUserNotifications);
export default router;
