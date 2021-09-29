const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const apiRouter = require('./routes/api')
const { port } = require('./config')

server.use(bodyParser.json())
server.use(cors())
server.use(express.json())

server.use('/api/', apiRouter)

server.listen(port, () => {
  console.log('Server listening')
})
