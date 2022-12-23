import { Router } from 'express'
import { 
        getAllLikes,
        getLikeById,
        createLike,
        updateLike,
        deleteLike,
        getAllLikesForPost,
        hasUserLikedPost
    } 
    from '../controllers/likeController.js'

const router = Router()

router.get("/get-like", getAllLikes)
router.get("/get-like/:id", getLikeById)
router.post("/create-like", createLike)
router.put("/update-like", updateLike)
router.delete("/delete-like", deleteLike)
router.get("/get-all-likes-for-post/:id", getAllLikesForPost)
router.get("/user-has-liked-post", hasUserLikedPost)

export default router