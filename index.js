const express = require("express");
const loginCredentials = require("./login.json");
const studentRoutes = require("./routes/studentRoutes.js");
const app = express();
const port = 3000;
console.log(loginCredentials);
app.use(express.json());
const cors = require('cors');
app.use(cors({
    origin: '*',methods:['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.get("/test",(req,res)=>{
    console.log('Test');
    res.send("welcome to login");
});
app.post("/login",cors(),(req,res)=>{
    console.log("login intiated");
    if(req.body.user && req.body.pass){
        let user = loginCredentials.users.find((_user)=> {
            if(_user.username === req.body.user) {
                return _user;
            }
        })
        if(user){
            if(user.password === req.body.pass){
                console.log(user)
                res.status(200).send(user);
            }
            else {
                console.log("pass wrong")
                res.status(401).send("invalid password, please check and try again");
            }
        }else{
            console.log(401)
            res.status(401).send("we couldn't find mentioned user");
        }
        }
    });
    app.user('/student/',studentRoutes);
    app.listen(post,()=>{
        console.log("open");
    })