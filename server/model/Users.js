const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        unique : true,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    friends:{
        type : Array
    }
});

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;