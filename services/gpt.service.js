const OpenAI = require('openai')
const { SYSTEM, USER } = require('../constants/gptRole')
const { SYSTEM_PROMPT } = require('../constants/gptSystemPrompt')

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY_3,
})

const execute = async (payload) => {
    const chatCompletion = await openai.chat.completions.create({
        messages: [
            {
                role: SYSTEM,
                content: SYSTEM_PROMPT,
            },
            {
                role: USER,
                content: payload.prompt,
            },
        ],
        model: payload.model,
    })
    return chatCompletion?.choices[0]?.message
}

module.exports = { execute }