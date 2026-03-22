import express from "express"
import {SlugControllerFacade} from "../controllers/SlugControllerFacade"

const router = express.Router()

router.get('/:slug-:id', SlugControllerFacade.showNode)

export default router
