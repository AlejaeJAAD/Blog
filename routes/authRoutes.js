import { Router } from 'express'
import { login, refresh_token } from '../controllers/authController.js'

const router = Router()

router.get("/login", login)
router.post("/refresh_token", refresh_token)

export default router