import { Router } from 'express'
import { 
        createCategory,
        getAllCategories,
        getCategoryById,
        updateCategory,
        deleteCategory,
        getCategoryByName
    } 
    from '../controllers/categoryController.js'

const router = Router()

router.post("/create-category", createCategory)
router.get(!"/get-all-categories", getAllCategories)
router.get("/get-category/:id", getCategoryById)
router.put("/update-category/:id", updateCategory)
router.delete("/delete-category/:id", deleteCategory)
router.get("/get-category-name/:categoryName", getCategoryByName)

export default router