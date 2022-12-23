import { Router } from 'express'
import { 
        getReportById,
        createReport,
        updateReport,
        deleteReport,
        getAllReportsMadeByUser,
        getAllReportsAboutUser
    } 
    from '../controllers/reportController.js'

const router = Router()

router.get("/get-report-by-id/:id", getReportById)
router.post("/create-report", createReport)
router.put("/update-report/:id", updateReport)
router.delete("/delete-report/:id", deleteReport)
router.get("/get-all-reports-made-by-user/:userId", getAllReportsMadeByUser)
router.get("/get-all-report-about-user/:userId", getAllReportsAboutUser)

export default router