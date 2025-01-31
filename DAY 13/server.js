const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require("./backend/configs/db")
const employeeRoutes = require('./backend/routes/employeeRoute')

dotenv.config()
connectDB()
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use("/MyAPI/employees", employeeRoutes)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))