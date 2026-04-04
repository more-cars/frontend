import express from "express"
import {VideoControllerFacade} from "../controllers/VideoControllerFacade"

const router = express.Router()

router.get('/videos', VideoControllerFacade.showAllNodes)

export default router
