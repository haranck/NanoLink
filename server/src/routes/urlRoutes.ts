import express from "express";

import { UrlController } from "../controllers/UrlController";

const router = express.Router();
const controller = new UrlController();

router.post("/shorten", controller.shortenUrl);

router.get("/:code", controller.redirectUrl);

export default router;