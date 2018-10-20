const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const setup = require('./setup')

if (!fs.existsSync('database.json')) {
    setup.setupDB()
}

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))