import express from "express"
import {LapTimeControllerFacade} from "../controllers/LapTimeControllerFacade"

const router = express.Router()

router.get('/lap-times', LapTimeControllerFacade.showAllNodes)

export default router
