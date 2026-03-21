import express from "express"
import {ModelCarBrandControllerFacade} from "../controllers/ModelCarBrandControllerFacade"

const router = express.Router()

router.get('/model-car-brands', ModelCarBrandControllerFacade.showAllNodes)

export default router
