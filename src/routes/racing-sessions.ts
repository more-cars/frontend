import express from "express"
import {RacingSessionControllerFacade} from "../controllers/RacingSessionControllerFacade"

const router = express.Router()

router.get('/racing-sessions', RacingSessionControllerFacade.showAllNodes)

export default router
