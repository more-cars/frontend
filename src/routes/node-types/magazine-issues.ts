import express from "express"
import {MagazineIssueControllerFacade} from "../../controllers/MagazineIssueControllerFacade"

const router = express.Router()

router.get('/magazine-issues', MagazineIssueControllerFacade.showAllNodes)
router.get('/magazine-issues/:id', MagazineIssueControllerFacade.showNode)

export default router
