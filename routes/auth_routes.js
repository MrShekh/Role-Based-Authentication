import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()
router.get('/home',authMiddleware, (req,res)=>{
    res.send("i am home")
})
export default router
