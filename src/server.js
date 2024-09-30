const express = require('express')
const app = express()
const helmet = require('helmet')

// ミドルウェア
app.use(helmet())

app.get('/', (req,res) => {
    res.send('hello node.js')
})

app.listen(3000, () => console.log("Server is running"))