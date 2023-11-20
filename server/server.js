import express from 'express'
import cors from 'cors'
require('dotenv').config()

import initRouter from './src/routes'
import connectDB from './src/config/connectDB'

const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

// Đọc dữ liệu từ client gửi lên
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

initRouter(app)
connectDB()

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log("Server running on port " + port);
})