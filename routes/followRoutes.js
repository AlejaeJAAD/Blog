import { Router } from 'express'
import { 
        getAllFollow,
        getFollowById,
        createFollow,
        updateFollow,
        deleteFollow,
        getAllUsersFollowedByUser,
        getAllUsersFollowingUser,
        isUserFollowingUser
    } 
    from '../controllers/followController.js'

const router = Router()

router.get("/get-follow", getAllFollow)
router.get("/get-follow/:id", getFollowById)
router.post("/create-follow", createFollow)
router.put("/update-follow", updateFollow)
router.delete("/delete-follow", deleteFollow)
router.get("/get-all-users-followed-by-user", getAllUsersFollowedByUser)
router.get("/get-allusers-following-user/:id", getAllUsersFollowingUser)
router.get("/is-following", isUserFollowingUser)

export default router