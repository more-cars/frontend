import express from "express"
import {BrandFacade} from "../controllers/BrandFacade"

const router = express.Router()

router.get('/brands', BrandFacade.showAllNodes)
router.get('/brands/:id', BrandFacade.showNode)

export default router
