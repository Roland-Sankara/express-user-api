import express from 'express';
const router = express.Router()
import userController from "../Controllers/userController.js";

// get requests

router.route("/")
    .get(userController.getallUsers)
    .post(userController.createNewUser)
// post requests 

export default router;