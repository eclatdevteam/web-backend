const express = require('express')
const router = express.Router()
const {addEnglish, getEnglish} = require('../controllers/englishController')
const { addMath, getMath } = require('../controllers/mathController')

router.post('/english',addEnglish)
router.get('/english',getEnglish)
router.post('/math',addMath)
router.get('/math',getMath)
module.exports = router