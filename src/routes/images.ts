import express from "express"
import {ImageFacade} from "../controllers/ImageFacade"

const router = express.Router()

router.get('/images', ImageFacade.showAllNodes)
router.get('/images/:id', ImageFacade.showNode)

export default router
