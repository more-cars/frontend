import express from "express"
import {RacingGameControllerFacade} from "../../controllers/RacingGameControllerFacade"

const router = express.Router()

router.get('/racing-games', RacingGameControllerFacade.showAllNodes)
router.get('/racing-games/:id', RacingGameControllerFacade.showNode)

export default router
