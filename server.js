const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoute')
const questionRoute = require('./routes/questionRoute')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 5000
const app = express()
const errorHandler = require('./middlewares/errorMiddleware')
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// errorhandler
app.use(errorHandler)
app.use(cookieParser())
// routes
// user route
app.use('/api/users',userRoute)
// question routes
app.use('/api/questions',questionRoute)
mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server running on port ${PORT}`.cyan.underline)
      })
})
.catch(
    (err)=>console.log(err)
)
