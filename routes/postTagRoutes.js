import { Router } from 'express'
import { 
        getAllPostTag,
        createPostTag,
        updatePostTag,
        deletePostTag,
        getAllPostTagsForPost
    } 
    from '../controllers/postTagController.js'

const router = Router()

router.get("/get-post-tag", getAllPostTag)
router.post("/create-post-tag", createPostTag)
router.put("/update-post-tag", updatePostTag)
router.delete("/delete-post-tag", deletePostTag)
router.get("/get-post-tag/:postId", getAllPostTagsForPost)

export default router