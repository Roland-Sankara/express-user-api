import fs from "node:fs";
import { StatusCodes } from "http-status-codes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getallUsers = async (req, res) => {
  try {
    let authors = await prisma.author.findMany();
    res.status(StatusCodes.OK).json(authors);

  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message)
  }
};

const createNewUser = (req, res) => {
  // I need to get the request object with the data to be saved in the data.json file
  // write the data to the file

  fs.readFile("./Models/users.json", (err, data) => {
    if (err) {
      console.log("Failed to get the Data");
    } else {
      fs.writeFile(
        "./Models/users.json",
        JSON.stringify([...JSON.parse(data), req.body], null, 2),
        (err) => {
          if (err) {
            res.send("failed to save new user");
          } else {
            res.send("Successfully save new user");
          }
        }
      );
    }
  });
  // save the data in the data.json file
};

const deleteQuote = async(req,res)=>{
  const data = await prisma.quote.delete({
    where:{
      id: +req.params.id
    }
  })

  res.json(data)
}

const functions = {
  createNewUser,
  getallUsers,
  deleteQuote
};
export default functions;
