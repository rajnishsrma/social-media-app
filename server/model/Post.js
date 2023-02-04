
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    userid:{
        type: String,
        required: true
    },
    visibility:{
        type: String,
        default: "public",
    },
 
});

const PostModel = mongoose.model("post", postSchema);
module.exports = PostModel;