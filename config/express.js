// importando dependencias
const express = require('express')
const app = express()
const body_parser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')

// aplicando middlewares
app.use(helmet())
app.use(cors())
app.use(body_parser.urlencoded({ limit: '2mb', extended: false }))
app.use(body_parser.json({ limit: '2mb' }))
app.use(compression())

module.exports = app