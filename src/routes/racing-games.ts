import express from "express"
import {RacingGameControllerFacade} from "../controllers/RacingGameControllerFacade"

const router = express.Router()

router.get('/racing-games', RacingGameControllerFacade.showAllNodes)

export default router
