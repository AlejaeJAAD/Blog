import { Router } from 'express'
import { 
        getComments,
        getCommentById,
        createComment,
        updateComment,
        deleteComment
    } 
    from '../controllers/commentController.js'

const router = Router()

router.get("/comments", getComments)
router.get("/comments/:id", getCommentById)
router.post("/comments", createComment)
router.put("/comments/:id", updateComment)
router.delete("/comments/:id", deleteComment)

export default router