import { Router } from 'express'
import { 
        getAllMessages,
        getMessageById,
        createMessage,
        updateMessage,
        deleteMessage,
        getAllMessagesSentByUser,
        getAllMessagesReceivedByUser
    } 
    from '../controllers/messageController.js'

const router = Router()

router.get("/get-message", getAllMessages)
router.get("/get-message/:id", getMessageById)
router.post("/create-message", createMessage)
router.put("/update-message/:id", updateMessage)
router.delete("/delete-message/:id", deleteMessage)
router.get("/get-all-messages-send-by-user/:userId", getAllMessagesSentByUser)
router.get("/get-all-messages-recieve-by-user/:userId", getAllMessagesReceivedByUser)

export default router