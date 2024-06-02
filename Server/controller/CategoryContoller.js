
const HomePage = (req,res)=>{
    try{
  return res.send({
    success : true,
    message : "Token is valid",
    data : req.user 

  })
    } catch(err){
      return res.status(500).send({
        success : false,
        message : new err.message,
      
      })
    }
  }
  
  module.exports = {
      HomePage
  }