const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config({path: '.env'});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:  true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connection established');
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