// ALL DEPENDENCIES IMPORT 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
// ALL DEPENDENCIES USE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


mongoose.connect("mongodb://localhost:27017/internal-amerta").then(() => {
    console.log("Berhasil Terkoneksi");
    app.listen(4000, () => {
        console.log("Server berjalan di port")
    })
}).catch(() => {
    console.log("Tidak terkoneksi")
});

app.get("/", (req, res) => {
    res.send("Welcome to payment gateway")
});