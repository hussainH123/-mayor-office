const login= require('../modules/auth.module');
const jwt = require('jsonwebtoken');

module.exports={
    
  login:  async(req,res)=>{

const data= req.body;
 try {
                const user = await login.findOne({firstname:data.firstname});
            if(!user){
                res.status(500).json({message:"useris not found"});


            }
            const token = jwt.sign({ username: 'john_doe' }, 'secret_key',{ expiresIn: '1h' });
            const refreshToken =jwt.sign({ username: 'john_doe' }, 'secret_key');
            res.cookie('token', token, {
              httpOnly: true,
              // Other cookie options (e.g., secure, sameSite) can be set here for additional security
          });
          res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            // Other cookie options (e.g., secure, sameSite) can be set here for additional security
        });
            res.status(200).json({token:refreshToken,refreshToken:refreshToken});

 } catch (error) {
                res.status(500).json({ error: error.message });
            }






}



}