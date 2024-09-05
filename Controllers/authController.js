import { PrismaClient } from "@prisma/client";
import StatusCodes from "http-status-codes";
import jwt from "jsonwebtoken";
import "dotenv/config";

const prisma = new PrismaClient();

const creatUser = async (req,res)=>{
  console.log(req.body)
  try{
    const user = await prisma.user.create({
      data: req.body
    })

    res.status(StatusCodes.CREATED).json({"message": "user created", user})
  }catch(err){
    res.status(StatusCodes.BAD_REQUEST).json({"error": "operation failed", err})
  }
}

const getUsers = async (req, res) => {
  console.log(req.query)
  const users = await prisma.user.findMany({
    take: parseInt(req.query.results) || "*"
  });

  res.status(200).json(users);
};

const loginAUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (user) {
    if (user.password === password) {
      // create a token
      const token = await jwt.sign(
        { id: user.id, role: user.role },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );

      // send the token as a response
      res.status(StatusCodes.OK).json({token, "Message": "Success"})

    } else {
      res
        .status(StatusCodes.FORBIDDEN)
        .json({ error: "Password was incorrect" });
    }
    res.status(200).json();
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ error: "User was not found" });
  }
};

export { getUsers, loginAUser, creatUser };
