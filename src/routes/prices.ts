import express from "express"
import {PriceControllerFacade} from "../controllers/PriceControllerFacade"

const router = express.Router()

router.get('/prices', PriceControllerFacade.showAllNodes)

export default router
