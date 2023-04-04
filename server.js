/////////////////    server.js -----Route/index ----model/Schema----Controller    ///////////

const express = require("express");
const fileUpload = require('express-fileupload');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express()
const router = require("./Route/index")
const mongoose = require("./Model/db.connection")


app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,secret_key");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use("/", router)


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
app.listen(8080);
console.log("Server Started : http://127.0.0.1:8080");