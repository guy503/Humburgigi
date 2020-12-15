const express = require('express')
const app = express()

require('dotenv').config()

app.all((req,res) => {
    res.send('hello')
})

