
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes") ;
const postRoute = require("./routes/postRoute")
const app = express();

mongoose.connect("mongodb+srv://root:root@cluster0.qgb2kk1.mongodb.net/?retryWrites=true&w=majority", (err)=>{
    if(!err){
        console.log("database connected")
    }
});

app.use(express.json());

app.use(cors())

userRoutes(app);

postRoute(app)

app.listen(3001, ()=>{
    console.log("server is working")
})