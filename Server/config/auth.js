const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next) =>{
    const token  = req.header('Authorization')?.split(" ")[1];

    if(!token){
        return res.status(401).send({
            success : false,
            message : 'Access Denied. No token provided'
        })
    }

    try{
        const decoded = jwt.verify(token,"ABC");
        req.user = decoded;
        next();
    } catch(err){
        return res.status(400).send({
            success: false,
            message: 'Invalid token.',
          });
    }
}

module.exports = verifyToken