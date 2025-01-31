import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import roleMiddleware from '../middleware/roleMiddleware.js'

const router = express.Router()
router.get('/profile',authMiddleware,roleMiddleware('admin'), (req,res)=>{
    res.send("hello admin")
})
export default router