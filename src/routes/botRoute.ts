import express from "express";
import { updateBot, stopBot, startBot } from "../controllers/botController";

const router = express.Router();

router.get("/start", startBot);
router.get("/update", updateBot);
router.get("/stop", stopBot);

export { router as botRouter };
