import express from "express"
import {CarModelControllerFacade} from "../controllers/CarModelControllerFacade"

const router = express.Router()

router.get('/car-models', CarModelControllerFacade.showAllNodes)
router.get('/car-models/:id', CarModelControllerFacade.showNode)

export default router
