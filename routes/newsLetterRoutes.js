import { Router } from 'express'
import { 
        getAllNewsLetter,
        getNewsLetterById,
        createNewsLetter,
        updateNewsLetter,
        deleteNewsLetter,
        getAllNewsLetterSubscribers
    } 
    from '../controllers/newsLetterController.js'

const router = Router()

router.get("/get-news-letter", getAllNewsLetter)
router.get("/get-news-letter/:id", getNewsLetterById)
router.post("/create-news-letter", createNewsLetter)
router.put("/update-news-letter", updateNewsLetter)
router.delete("/delete-news-letter/:id", deleteNewsLetter)
router.get("/get-all-news-letter-subscribers", getAllNewsLetterSubscribers)

export default router