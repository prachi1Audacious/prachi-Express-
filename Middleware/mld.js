const token= function(req,res,next){
    let m = false;

    if(m){
        next()
    }
    else{
        res.status(401).send({message:"not authorized"})
        return;
    }
}

module.exports ={ 
token};


/*
case 1
export = token

require =>   const token = requre('path)

case 2
module.exports ={ token } ; 
require =>   const {token} = requre('path)

*/ 
 
