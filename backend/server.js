const express = require('express')
const cors = require('cors')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const aboutRouter = require("./routes/about");
// const contactRouter = require("./routes/contact");

// app.use("/contact", contactRouter);
// app.use("/about", aboutRouter);
app.get("/", (req,res) => {
    res.send("Hola")
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});