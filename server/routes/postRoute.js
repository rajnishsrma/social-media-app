const Post = require("../model/Post");
const jwt = require("jsonwebtoken")


const postRoute =  (app)=>{
    
    app.get("/posts",async (req, res)=>{
       let posts = await Post.find()
       console.log(posts)
        res.json( posts)
    })

    app.post("/posts/create", async (req, res)=>{
        const {title,  visibility, token} = req.body ;
        console.log(req.body)
        const {_id, name} = await jwt.verify(token, "Secret_key");


        if(!_id){
            return res.json({error : true, msg:"token invalid"})
        }
           
        const newPost = new Post({
            title, visibility, userid : _id
        })

        newPost.save();
        
        res.send("post created")
    })

    app.get("/posts/:id", async (req, res )=>{
        console.log(req.params)
        let post = await Post.findById(req.params.id);
        res.send(post)
    })

    app.put("/posts/:id" , async (req, res)=>{
        let id = req.params.id ;
         await Post.findByIdAndUpdate({_id : id}, {...req.body});
        
        res.send("post updated")
    })

    app.delete("/posts/:id" , async (req, res)=>{
        let id = req.params.id;
        await Post.findByIdAndRemove({_id: id});

        res.send("delete post")
    })
}

module.exports = postRoute;