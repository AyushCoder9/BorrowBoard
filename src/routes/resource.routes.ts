import { Router } from "express";
import { ResourceController } from "../controllers/resource.controller.js";
import { authMiddleware } from "../utils/auth.middleware.js";

const router = Router();
const controller = new ResourceController();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);

router.post("/", authMiddleware, controller.create);
router.put("/:id", authMiddleware, controller.update);
router.delete("/:id", authMiddleware, controller.delete);

export default router;
