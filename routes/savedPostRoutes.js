import { Router } from 'express'
import { 
        getSavedPostById,
        createSavedPost,
        updateSavedPost,
        deleteSavedPost,
        getAllSavedPostsForUser
    } 
    from '../controllers/savedPostController.js'

const router = Router()

router.get("/get-saved-post/:id", getSavedPostById)
router.post("/create-saved-post", createSavedPost)
router.put("/update-saved-post/:id", updateSavedPost)
router.delete("/delete-saved-post/:id", deleteSavedPost)
router.get("/get-all-saved-posts/:userId", getAllSavedPostsForUser)

export default router