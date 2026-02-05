import express from "express"
import {LapTimeControllerFacade} from "../controllers/LapTimeControllerFacade"

const router = express.Router()

router.get('/lap-times', LapTimeControllerFacade.showAllNodes)
router.get('/lap-times/:id', LapTimeControllerFacade.showNode)

export default router
