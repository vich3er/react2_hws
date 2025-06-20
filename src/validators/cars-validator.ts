import Joi from "joi";

  export const carsValidator = Joi.object({
brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).min(1).max(20).messages({
    "string.pattern.base": "brand does not match the pattern",
    "string.max": "the brand must not be longer than 20 characters",
    "string.min": "the brand must contain at least 1 character",
    "any.required": "the brand is required",
}),
      price: Joi.number().min(0).max(1000000).required().messages({
          "string.min": "the minimum price is 0",
      "string.max": "the maximum price is 1000000",
      "any.required": "the minimum price is required",
      }),
      year: Joi.number().min(1990).max(2024).required().messages({
          "string.max": "the year must be less than 2024",
          "string.min": "the year must be more than 1990",
          "any.required": "the year is required",
      })
})