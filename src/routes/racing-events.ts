import express from "express"
import {RacingEventControllerFacade} from "../controllers/RacingEventControllerFacade"

const router = express.Router()

router.get('/racing-events', RacingEventControllerFacade.showAllNodes)

export default router
