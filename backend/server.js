import express from "express";
import cors from "cors";
import movies from "./api/movies.route.js";

const app = express();

app.use(cors());
app.use(express.json())

app.use("/api/movies", movies)
app.use("/api/movies/else", (req,res,next) => {
    res.send("elseee")
})
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app