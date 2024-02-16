const Joi = require('joi')
const { GPT3, GPT4 } = require('../constants/gptModel')

const isValidForExecute = async (payload) => {
    const schema = Joi.object({
        model: Joi.string().valid(GPT3, GPT4).required(),
        prompt: Joi.string().required().max(400).min(2),
    })
    return schema.validateAsync(payload)
}

module.exports = { isValidForExecute }