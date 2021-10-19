import express from "express"
import cors from "cors"
import users from "./api/users.routes.js"
import movies from "./routes/movies.routes.js"

const app = express();

app.use(cors());
app.use(express.json())

app.use("/api/users", users);
app.use("/api/movies", movies);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app
