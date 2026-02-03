import express from "express"
import {RacingSessionControllerFacade} from "../controllers/RacingSessionControllerFacade"

const router = express.Router()

router.get('/racing-sessions', RacingSessionControllerFacade.showAllNodes)
router.get('/racing-sessions/:id', RacingSessionControllerFacade.showNode)

export default router
