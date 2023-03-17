function service(req,res){
    try{
        res.status(200).send({message: "services provided"})
    }catch(error){
        res.status(500).send({message:"not provided"})
    }

}

function login(req,res){
    
        res.status(200).send({message: "create loginpage"})
    
}

function logout(req,res){
    
        res.status(200).send({message: "page is logout"})
   
}

function dashboard(req,res){
    
        res.status(200).send({message: "Available dashboard"})
   

}


module.exports = {
    service,
    dashboard,
    login,
    logout
}