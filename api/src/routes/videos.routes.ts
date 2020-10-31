import { Router } from "express";
const router = Router();

import * as videoCtrl from "../controllers/videos.controllers";

router.get("/videos", videoCtrl.getVideos);

router.post("/videos", videoCtrl.createVideo);

router.get("/videos/:id", videoCtrl.getVideo);

router.put("/videos/:id", videoCtrl.updateVideo);

router.delete("/videos/:id", videoCtrl.daleteVideo);

export default router;
