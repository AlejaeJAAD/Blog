import { Router } from 'express'
import { 
        createSetting,
        updateSetting,
        deleteSetting,
        getAllSettingsForUser,
        getSettingByNameForUser
    } 
    from '../controllers/settingController.js'

const router = Router()

router.post("/create-setting", createSetting)
router.put("/update-setting/:id", updateSetting)
router.delete("/delete-setting/:id", deleteSetting)
router.get("/get-all-settings-for-user/:userId", getAllSettingsForUser)
router.get("/get-setting-by-name-for-user/:userId", getSettingByNameForUser)

export default router