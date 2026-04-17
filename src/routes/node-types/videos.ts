import express from "express"
import {VideoControllerFacade} from "../../controllers/VideoControllerFacade"

const router = express.Router()

router.get('/videos', VideoControllerFacade.showAllNodes)
router.get('/videos/:id', VideoControllerFacade.showNode)

export default router
