import express from "express"
import {RaceTrackControllerFacade} from "../controllers/RaceTrackControllerFacade"

const router = express.Router()

router.get('/race-tracks', RaceTrackControllerFacade.showAllNodes)

export default router
