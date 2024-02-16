const { execute } = require('../services/gpt.service')
const { isValidForExecute } = require('../validators/gpt.validator')

const gptExecute = async (req, res) => {
    try {
        const validatedData = await isValidForExecute(req.body)
        if(validatedData){
            const response = await execute(validatedData)
            return res.send(response)
        }
        else{
            return res.send(validatedData?.details[0]?.message)
        }
    } catch (err) {
            return res.send(err.message)
    }
}

module.exports = { gptExecute }