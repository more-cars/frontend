import express from "express"
import {ModelCarBrandControllerFacade} from "../../controllers/ModelCarBrandControllerFacade"

const router = express.Router()

router.get('/model-car-brands', ModelCarBrandControllerFacade.showAllNodes)
router.get('/model-car-brands/:id', ModelCarBrandControllerFacade.showNode)

export default router
