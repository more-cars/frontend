import express from "express"
import {MotorShowControllerFacade} from "../controllers/MotorShowControllerFacade"

const router = express.Router()

router.get('/motor-shows', MotorShowControllerFacade.showAllNodes)

export default router
