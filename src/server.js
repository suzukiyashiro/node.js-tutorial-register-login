const express = require('express')
const app = express()
const helmet = require('helmet')

app.use(helmet())

app.listen(3000, () => console.log("Server is running"))