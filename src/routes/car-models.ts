import express from "express"
import {CarModelFacade} from "../controllers/CarModelFacade"

const router = express.Router()

router.get('/car-models', CarModelFacade.showAllNodes)
router.get('/car-models/:id', CarModelFacade.showNode)

export default router
