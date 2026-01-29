import express from "express"
import {TrackLayoutControllerFacade} from "../controllers/TrackLayoutControllerFacade"

const router = express.Router()

router.get('/track-layouts', TrackLayoutControllerFacade.showAllNodes)
router.get('/track-layouts/:id', TrackLayoutControllerFacade.showNode)

export default router
