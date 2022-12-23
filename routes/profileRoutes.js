import { Router } from 'express'
import { getAllProfiles, createProfile, getProfile, getProfileByUserId, updateProfile, deleteProfile } from '../controllers/profileController.js'

const router = Router()

router.get("/user-profile/get-all", getAllProfiles)
router.post("user-profile/create-profile", createProfile)
router.get("/user-profile/:id", getProfile)
router.get("/user-profile/:userId", getProfileByUserId)
router.put("/user-profile/:id", updateProfile)
router.delete("user-profile/:id", deleteProfile)

export default router