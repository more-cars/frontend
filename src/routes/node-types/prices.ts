import express from "express"
import {PriceControllerFacade} from "../../controllers/PriceControllerFacade"

const router = express.Router()

router.get('/prices', PriceControllerFacade.showAllNodes)
router.get('/prices/:id', PriceControllerFacade.showNode)

export default router
