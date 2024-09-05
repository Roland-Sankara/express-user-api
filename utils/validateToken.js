import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import "dotenv/config"

const validateToken = (req,res,next)=>{
    // check the request headers for the token
    const authHeader = req.headers.authorization
    if(authHeader){
        let token = authHeader.split(" ")[1]

        jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
            if(err){
                res.json(err)
            }
            else{
                next()
            }
        });

    }else{
        res.status(StatusCodes.BAD_REQUEST).json("Authorization Header with Access Token is Missing")
    }
    // Get the token and and vaidate it using jwt
        // if the tokenn is invalid, send to user
        // else go to the next function
}

export default validateToken;