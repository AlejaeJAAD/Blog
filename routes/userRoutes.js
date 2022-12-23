import { Router } from 'express'
import { 
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    getUserByEmail,
    getUserByNickname
} from '../controllers/userController.js'

const router = Router()

router.get("/users", getUsers)
router.get("/users/:userId", getUserById)
router.get("/users", getUserByEmail)
router.get("/users/:nickname", getUserByNickname)
router.post("/create-user", createUser)
router.put("/update-user/:id", updateUser)
router.delete("/delete-user/:id", deleteUser)

export default router