import express from 'express';
const router = express.Router()
import userController from "../Controllers/userController.js";

// get requests

router.get("/", userController.getallUsers)

router.post("/", userController.createNewUser)
// post requests 

export default router;