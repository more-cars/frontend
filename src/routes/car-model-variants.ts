import express from "express"
import {CarModelVariantControllerFacade} from "../controllers/CarModelVariantControllerFacade"

const router = express.Router()

router.get('/car-model-variants', CarModelVariantControllerFacade.showAllNodes)
router.get('/car-model-variants/:id', CarModelVariantControllerFacade.showNode)

export default router
