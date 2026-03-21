import express from "express"
import {ModelCarControllerFacade} from "../controllers/ModelCarControllerFacade"

const router = express.Router()

router.get('/model-cars', ModelCarControllerFacade.showAllNodes)

export default router
