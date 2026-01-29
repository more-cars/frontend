import express from "express"
import {RacingSeriesControllerFacade} from "../controllers/RacingSeriesControllerFacade"

const router = express.Router()

router.get('/racing-series', RacingSeriesControllerFacade.showAllNodes)

export default router
