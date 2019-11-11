const express = require("express")
const app = express()
const mongoose = require ("mongoose")
require("dotenv/config")

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true,  useUnifiedTopology: true }, ()=> console.log("connected to db"))
app.listen(3333)