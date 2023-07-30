const asyncHandler = require('express-async-handler')
const English = require('../models/englishModel')
const {english,englishAnswers} = require('../database/data') 

const addEnglish =asyncHandler(async(req,res)=>{
  try {
        await English.insertMany({questions: [english], answers: [englishAnswers]});
        res.json({msg: "Data has been saved successfully"});
      } catch (error) {
        res.json({error});
      }
}) 


const getEnglish =asyncHandler(async(req,res)=>{
  try {
    const q = await English.find()
    res.json(q)
} catch (error) {
  res.json({error})  
}
})

module.exports={
    addEnglish,
    getEnglish
}