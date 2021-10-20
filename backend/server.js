import express from "express"
import cors from "cors"
import users from "./api/users.routes.js"
<<<<<<< HEAD
=======
import movies from "./routes/movies.routes.js"
>>>>>>> d28bc444c51a75e13db5ae061f34c1f322f17092

const app = express();

app.use(cors());
app.use(express.json())

<<<<<<< HEAD
app.use("/api/users", users)
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app
=======
app.use("/api/users", users);
app.use("/api/movies", movies);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app
>>>>>>> d28bc444c51a75e13db5ae061f34c1f322f17092
