import express from "express"
import {BrandControllerFacade} from "../controllers/BrandControllerFacade"

const router = express.Router()

router.get('/brands', BrandControllerFacade.showAllNodes)
router.get('/brands/:id', BrandControllerFacade.showNode)

export default router
