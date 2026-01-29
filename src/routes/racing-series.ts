import express from "express"
import {RacingSeriesControllerFacade} from "../controllers/RacingSeriesControllerFacade"

const router = express.Router()

router.get('/racing-series', RacingSeriesControllerFacade.showAllNodes)
router.get('/racing-series/:id', RacingSeriesControllerFacade.showNode)

export default router
