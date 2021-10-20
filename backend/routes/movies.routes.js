import express from 'express'
import movieController from "../api/movieController.js"

const router = express.Router();

router.get("/test", movieController.test);
router.get("/lastest", movieController.getLatest);
<<<<<<< HEAD
router.get("/inf", movieController.getDetails);
=======
router.get("/movie", movieController.getJustOneMovie);
>>>>>>> 04f73e602d95bdf383ff7fb981f8c5369b6904ec

export default router
