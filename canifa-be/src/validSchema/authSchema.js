import Joi from "joi";

export const authSchema = Joi.object({
    email: Joi.string().required().email().messages({
        "string.base": "Title must be a string",
        "string.empty": "Title cannot be empty",
        "any.required": "Title is required", 
        "string.email": "Email must be a valid email"
    }),
    password: Joi.string().required().min(6).max(255).messages({
        "string.base": "Title must be a string",
        "string.empty": "Title cannot be empty",
        "any.required": "Title is required",
        "string.min": "Password must have at least 6 characters", 
        "string.max": "Password must have at most 255 characters", 
    }),
});