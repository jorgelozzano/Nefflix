import express from 'express'

const router = express.Router();

router.route("/").get((req,res) => res.send("Main"))
router.route("/movies").get((req,res) => res.send("Movies"))

export default router