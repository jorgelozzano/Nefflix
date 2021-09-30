const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const username = "sdJorge";
const password = "mean123";
const cluster = "Cluster0";
const dbname = "myFirstDatabase";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);
// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log('Database connection established');
// });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

const aboutRouter = require("./routes/about");
const contactRouter = require("./routes/contact");

app.get("/", (req, res) => {
    res.send("hola mundo");
});
app.use("/contact", contactRouter);
app.use("/about", aboutRouter);

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});