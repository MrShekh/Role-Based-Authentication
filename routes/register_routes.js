import express from 'express'
import register from '../controller/register_controller.js'

const router = express.Router()
router.post('/register',register)

export default router