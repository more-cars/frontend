import express from "express"
import {MagazineIssueControllerFacade} from "../controllers/MagazineIssueControllerFacade"

const router = express.Router()

router.get('/magazine-issues', MagazineIssueControllerFacade.showAllNodes)

export default router
