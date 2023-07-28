//Tạo Server
import express from 'express';

//Kích hoạt .env
import dotenv from 'dotenv'
dotenv.config()

// import bodyParser from 'body-parser'
import apiConfig from '../routes'

const server = express()

// server.use(bodyParser.urlencoded({ extended: false }))
server.use(express.json())

//Setup Cors
import cors from 'cors'
server.use(cors())

//Setup Views
import viewConfig from '../views'
server.use('/views', viewConfig)

//Setup API
server.use('/apis', apiConfig)

server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_HOST}:${process.env.SERVER_PORT} `)
})