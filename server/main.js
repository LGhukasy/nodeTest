const express = require("express");
const bodyParser = require('body-parser');
let app = express();

let user = {
    name : "Levon",
    surname : "Ghukasyan",
    mail : "LeonGhukasyan@gmail.com",
    password : "15993577",
}
let users = [];
// function userValidation(data){
//     if(data.name != user.name){
//         return {
//             status : false,
//             message : "uncorrent name"
//         }
//     }
//     else if (data.surname != user.surname){
//         return{
//             satus : false,
//             message : "incorrect surname"
//         }
//     }
//     else if(data.mail != user.mail){
//         return{
//             status : false,
//             message : "uncorrent mail"
//         }
//     }
//     else if (data.password != user.password){
//         return{
//             status : false,
//             message : "uncorrect password"
//         }
//     }
//     else{
//         return{
//             status: true,
//             message : "SUCCESS"
//         }
//     }
// }
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",function(req,res){
    res.send("hello")
})

app.post("/reg",(req,res)=>{
    // console.log(req.body);
    // users.push(req.body)
    // console.log(req.body.name)
    let message = "";
    function checkRegistredUser(){
        let status = false;
        for(let i in users){
            // console.log(req.body.name,req.body.name = users[i].name)
            if(req.body.name == users[i].name){
                status = true;
            }
        }
        return status;
    }
    if(!users.length){
        users.push(req.body)
        console.log(req.body.name, "user added");
        message = req.body.name + "  You are registred"
    }
    else if(!checkRegistredUser()){
        users.push(req.body);
        console.log(req.body.name, "user added");
        message = req.body.name + "  You are registred"
    }
    else{
        console.log(req.body.name, "user exists");
        message = req.body.name + "  You are ALREADY registred"
    }
    console.log(users)
    res.send(message)
})

app.listen(5000,function(){
    console.log("server linten in 5000 port")
})