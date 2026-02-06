import express from "express"
import {CarModelVariantControllerFacade} from "../controllers/CarModelVariantControllerFacade"

const router = express.Router()

router.get('/car-model-variants', CarModelVariantControllerFacade.showAllNodes)

export default router
