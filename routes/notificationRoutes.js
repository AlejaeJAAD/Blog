import { Router } from 'express'
import { 
        getAllNotifications,
        getNotificationById,
        createNotification,
        updateNotification,
        deleteNotification,
        getAllNotificationsForUser
    } 
    from '../controllers/notificationController.js'

const router = Router()

router.get("/get-notification", getAllNotifications)
router.get("/get-notification/:id", getNotificationById)
router.post("/create-notification", createNotification)
router.put("/update-notification", updateNotification)
router.delete("/delete-notification/:id", deleteNotification)
router.get("/get-all-notification-for-user/:userId", getAllNotificationsForUser)

export default router