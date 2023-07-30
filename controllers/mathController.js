const asyncHandler = require('express-async-handler')
const Math = require('../models/mathModel')
const {math,mathAnswers} = require('../database/data') 

const addMath =asyncHandler(async(req,res)=>{
  try {
        await Math.insertMany({questions: [math], answers: [mathAnswers]});
        res.json({msg: "Data has been saved successfully"});
      } catch (error) {
        res.json({error});
      }
}) 


const getMath =asyncHandler(async(req,res)=>{
  try {
    const q = await Math.find()
    res.json(q)
} catch (error) {
  res.json({error})  
}
})

module.exports={
    addMath,
    getMath
}