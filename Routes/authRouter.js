import express from 'express'
import {getUsers, loginAUser, creatUser} from "../Controllers/authController.js"
import {userschema} from '../utils/joi.schemas.js'
import validateRequest from '../utils/joi.validator.js'
import validateToken from '../utils/validateToken.js'
const router = express.Router()

router.get('/', validateToken, getUsers)
router.post('/', validateRequest(userschema), creatUser)
router.post('/login', loginAUser)

export default router;