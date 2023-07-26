const express = require('express')
const app = express()
const userRouter = require('./routes/users')
const bodyParser = require('body-parser')

const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/api/v1/users', userRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})