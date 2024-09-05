import express from 'express';
const router = express.Router()
import userController from "../Controllers/userController.js";
import validator from "../utils/joi.validator.js";
import {userschema, authorSchema} from "../utils/joi.schemas.js";

// get requests
router.delete('/:id',userController.deleteQuote)
router.route("/")
    .get(userController.getallUsers)
    .post(validator(userschema), userController.createNewUser);
// post requests 

export default router;