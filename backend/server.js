import express from "express";
import cors from "cors";
import users from "../routes/usersRoutes.js";

const app = express();

app.use(cors());
app.use(express.json())

app.use(users)
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app