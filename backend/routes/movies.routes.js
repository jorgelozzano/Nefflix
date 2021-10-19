import express from 'express'
import movieController from "../api/movieController.js"

const router = express.Router();

router.get("/test", movieController.test);

export default router
