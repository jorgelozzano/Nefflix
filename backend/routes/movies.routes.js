import express from 'express'
import movieController from "../api/movieController.js"

const router = express.Router();

router.get("/test", movieController.test);
router.get("/lastest", movieController.getLatest);
router.get("/movie", movieController.getJustOneMovie);

export default router
