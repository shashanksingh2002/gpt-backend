const express = require('express')
const router = express.Router()
const { gptExecute } = require('../controllers/gpt.controller')

router.post('/gpt', gptExecute)
module.exports =router