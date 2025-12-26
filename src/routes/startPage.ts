import express from "express"
import {StartPageControllerFacade} from "../controllers/StartPageControllerFacade.ts"

const router = express.Router()

router.get('/', StartPageControllerFacade.show)

export default router
