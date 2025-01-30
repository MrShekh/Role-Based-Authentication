import express from 'express'
import roleMiddleware from '../middleware/roleMiddleware.js'

const router = express.Router()
router.get('/profile',roleMiddleware('admin'))
export default router