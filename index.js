require('./envloader')()

const express = require('express')
const cors = require('cors')
const baseRouter = require('./router')
const compression = require('compression')
const morgan = require('morgan')

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(
    morgan(
        'REQUEST :response-time ms [:date[clf]] ":method :url HTTP/:http-version" :status :user-agent',
        {
            immediate: true,
            skip: function (req) { return (req.path === '/api/') },
        },
    ),
)
app.use(
    express.urlencoded({
        extended: true,
        limit: '2mb',
        parameterLimit: 1e6,
    }),
)
app.use(compression())

app.use('/api/', baseRouter)

app.get('/', (req, res) => {
    return res.send('GPT server is up and running')
})

app.listen(PORT, () => {
    console.log('Server is running at port:',PORT)
})