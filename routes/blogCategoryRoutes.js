import { Router } from 'express'
import { 
        createBlogCategory,
        getAllBlogCategories,
        getBlogCategoryById,
        updateBlogCategory,
        deleteBlogCategory,
        getBlogCategoryByName
    } 
    from '../controllers/blogCategoryController.js'

const router = Router()

router.post("/create-blog-category", createBlogCategory)
router.get(!"/get-all-blog-categories", getAllBlogCategories)
router.get("/get-blog-category/:id", getBlogCategoryById)
router.put("update-blog-category/:id", updateBlogCategory)
router.delete("/delete-blog-category/:id", deleteBlogCategory)
router.get("/get-blog-category-by-name/:blogCategoryName", getBlogCategoryByName)

export default router