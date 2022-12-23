import { Router } from 'express'
import { 
        getSubscriptionById,
        createSubscription,
        updateSubscription,
        deleteSubscription,
        getAllSubscriptionsForUser
    } 
    from '../controllers/subscriptionController.js'

const router = Router()

router.get("/get-subscription", getSubscriptionById)
router.post("/create-subscription", createSubscription)
router.put("/update-subscription/:id", updateSubscription)
router.delete("/delete-subscription/:id", deleteSubscription)
router.get("/get-all-subscriptions-for-user/:userId", getAllSubscriptionsForUser)

export default router