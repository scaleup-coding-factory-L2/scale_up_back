import { addContributor } from "@/controllers/ContributorController";
import { Router } from "express";

const router = Router();

router.post("/", addContributor);

export default router;
