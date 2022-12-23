import { Router } from 'express'
import { 
        getAllCustomField,
        getCustomFieldById,
        updateCustomField,
        deleteCustomField,
        getAllCustomFieldsForUser,
        getCustomFieldByNameForUser
    } 
    from '../controllers/customFieldController.js'

const router = Router()

router.get("/cusmtom-fields", getAllCustomField)
router.get("/custom-fields:id", getCustomFieldById)
router.put("/custom-fields/:id", updateCustomField)
router.delete("/custom-field/:id", deleteCustomField)
router.get("/custom-field/:userId", getAllCustomFieldsForUser)
router.get("/custom-field/getByName/:customFieldName", getCustomFieldByNameForUser)

export default router