import express from "express"
import {ImageControllerFacade} from "../controllers/ImageControllerFacade"

const router = express.Router()

router.get('/images', ImageControllerFacade.showAllNodes)
router.get('/images/:id', ImageControllerFacade.showNode)

export default router
