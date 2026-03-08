import express from "express"
import {GamingPlatformControllerFacade} from "../controllers/GamingPlatformControllerFacade"

const router = express.Router()

router.get('/gaming-platforms', GamingPlatformControllerFacade.showAllNodes)
router.get('/gaming-platforms/:id', GamingPlatformControllerFacade.showNode)

export default router
