import express from "express"
import {MotorShowControllerFacade} from "../controllers/MotorShowControllerFacade"

const router = express.Router()

router.get('/motor-shows', MotorShowControllerFacade.showAllNodes)
router.get('/motor-shows/:id', MotorShowControllerFacade.showNode)

export default router
