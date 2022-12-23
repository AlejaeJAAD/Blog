import { Router } from 'express'
import { 
        getPosts,
        getPost,
        flagPost,
        getPostComments,
        createPostComments,
        customFieldPost,
        locationPost,
        deleteComment,
        uploadMedia,
        searchPost,
        likePost,
        followPost,
        getOwnPosts,
        createPost,
        updatePost,
        deletePost,
        getAllPostsForBlogCategory,
        getAllPostsForCategory,
        getAllPostsForUser
    } 
    from '../controllers/postController.js'
import upload from '../multer.js'

const router = Router()

router.get("/posts", getPosts)
router.get("/posts/:id", getPost)
router.post("/posts/:id/flag", flagPost)
router.get("/posts/:id/comments", getPostComments)
router.post("/posts/:id/comments", createPostComments)
router.post("/posts/:id/custom-fields", customFieldPost)
router.get("/posts/:id/location", locationPost)
router.delete("/posts/comments/:id", deleteComment)
router.post("/posts/upload", uploadMedia)
router.get("/posts/search", searchPost)
router.post("/posts/like", likePost)
router.post("/posts/follow", followPost)
router.get("/users/:id/posts", getOwnPosts)
router.post("/create-post", upload.single('image'), createPost)
router.put("/posts/:id", updatePost)
router.delete("/posts/:id", deletePost)
router.get("/posts/blog-category/:blogCategoryId", getAllPostsForBlogCategory)
router.get("/posts/category/:categoryId", getAllPostsForCategory)
router.get("/posts/:userId", getAllPostsForUser)

export default router