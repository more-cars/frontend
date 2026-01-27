import express from "express"
import {RaceTrackControllerFacade} from "../controllers/RaceTrackControllerFacade"

const router = express.Router()

router.get('/race-tracks', RaceTrackControllerFacade.showAllNodes)
router.get('/race-tracks/:id', RaceTrackControllerFacade.showNode)

export default router
