'use strict'

require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.static('public'))
app.get('/', (req, res) => {
	res.send('Hello world')
})


const port = process.env.PORT || 4000
app.listen(port, function() {
	console.log(`listening on port ${port}`)
})
