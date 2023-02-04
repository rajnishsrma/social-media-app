const UserModel = require("../model/Users");
const jwt = require("jsonwebtoken");

const userRoutes = (app)=>{
    app.post("/signup", (req, res)=>{
        // res.send(req.body)

        const newUser = new UserModel({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            friends : []
        })

        newUser.save();
        res.send("user is successfully resistered")
    });

    app.post("/login", async (req, res)=>{

        const {phone, password} = req.body;
        //console.log(phone, password)

       const result = await  UserModel.findOne({phone  , password});
       
       if(result){
        const {_id , name, email, friends } = result ;
        const token = await jwt.sign({_id : _id, phone : phone} , "Secret_key", {expiresIn : "2h"});

         res.json({ name, email , phone, friends , token });

       }else{
            res.json({error : true , msg : "Invlid credential"})
       }

    });

    app.get("/friends", async (req,res)=>{
        let users = await UserModel.find();
        console.log("users ", users)
        let usersList = users.map((u) => {
            let user = {
                name : u.name,
                email : u.email,
                phone : u.phone
            }

            return user ;
        })

        console.log("usersList ", usersList)

        res.json(usersList)

    })


    app.put("/add-friend/:ph", async (req, res)=>{   // axios.put("http://localhost:3001/add-friend/455555", {token : "fffff"}) ;
            let frnd_phone = req.params.ph ;
            let token = req.body.token ;

            if(!frnd_phone || !token){
                return res.json({error : true, msg : "phone or token not found"});
            }

            const {_id, phone} = await jwt.verify(token , "Secret_key");

            let result =  await UserModel.findByIdAndUpdate(_id,{ "$push": { "friends": frnd_phone } },
            { "new": true, "upsert": true });

            let result2 = await UserModel.updateOne({phone : frnd_phone }, { "$push": { "friends": phone }});

            console.log(result);

            res.json({ msg : "Successfully Connected.."})
    })

}


module.exports = userRoutes ;