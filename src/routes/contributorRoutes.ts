import {
  addContributor,
  removeContributor,
} from "@/controllers/ContributorController";
import { Router } from "express";

const router = Router();

router.post("/", addContributor);
router.delete("/:id", removeContributor);

export default router;
