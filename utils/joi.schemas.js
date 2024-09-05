import Joi from 'joi';

// users schema
const userschema = Joi.object({
    username: Joi.string().min(3).max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(5).max(10).required()
})


const authorSchema = Joi.object({
    name: Joi.string().min(3).max(10).required(),
    email: Joi.string().email().required(),
    pass: Joi.string().alphanum().min(5).max(10).required()
})




export {userschema, authorSchema}