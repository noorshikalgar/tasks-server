const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 3200

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req,res) => res.json({ message : "Server is running..." }))

app.listen(port, () => console.log(`Tasks Server started at port : ${port}`));
