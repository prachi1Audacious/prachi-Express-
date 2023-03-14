const express = require("express")
const app = express()
const port = 8080;



//middleware
app.use(express.json())


//Homepagrrouting
//app.methods("rountings path", "handler/ controler")

app.get("/",(req,res) => {
    res.status(200).send('<h1>hello</h1>');
})
app.get("/api/v2/auth/generateMobileOTP",(req,res) => {
    res.status(200).send({"contact no.":"mobile number"});
})


//server port
app.listen(port,() => {
    console.log("server is running")
})
    


///api/v2/auth/generateMobileOTP