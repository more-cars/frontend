import express from "express"
import {GamingPlatformControllerFacade} from "../controllers/GamingPlatformControllerFacade"

const router = express.Router()

router.get('/gaming-platforms', GamingPlatformControllerFacade.showAllNodes)

export default router
