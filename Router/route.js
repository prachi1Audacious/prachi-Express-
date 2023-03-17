const route = require("express").Router()
const {service,login,logout,dashboard} = require("../Controller/clr")
const {token} = require('../Middleware/mld')

route.get("/service",[token],service)
route.get("/login",login)
route.get("/logout",logout)
route.get("/dashboard",dashboard)


//For body .parse .query
route.get("/signup",()=>{
    let username = req.body.username
    let email = req.body.mail;

    res.send(200).send({message:{'name':username,'email':email}})
})

module.exports ={prachi: route}

