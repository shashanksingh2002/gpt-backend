const express = require('express')
const router = express.Router()

const gptRouter = require('./routers/gpt.router')

router.use('/', gptRouter)

module.exports = router