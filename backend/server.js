const express = require("express")
const cors = require("cors")
const users = require("./routes/usersRoutes")

const app = express();

app.use(cors());
app.use(express.json())

app.use(users)
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

module.exports = app