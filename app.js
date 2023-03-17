const express = require("express");

const app = express();
const port = 4040;
const {prachi} = require("./Router/route")


//middleware
app.use(express.json());
app.use(prachi)


//Homepage routing
app.get("/",(req,res) => {
    res.status(200).send('my name is prachi');
})


//server port
app.listen(port,() => {
    console.log("server is running");
})