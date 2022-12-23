import { Router } from 'express'
import { 
        getAllTags,
        createTag,
        updateTag,
        deleteTag,
        findTagByName
    } 
    from '../controllers/tagController.js'

const router = Router()

router.get("/get-all-tag", getAllTags)
router.post("/create-tag", createTag)
router.put("/update-tag", updateTag)
router.delete("/delete-tag/:id", deleteTag)
router.get("/find-tag-by-name/:tagName", findTagByName)

export default router