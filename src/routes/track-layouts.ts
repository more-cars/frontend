import express from "express"
import {TrackLayoutControllerFacade} from "../controllers/TrackLayoutControllerFacade"

const router = express.Router()

router.get('/track-layouts', TrackLayoutControllerFacade.showAllNodes)

export default router
