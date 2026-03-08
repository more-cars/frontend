import express from "express"
import {MagazineControllerFacade} from "../controllers/MagazineControllerFacade"

const router = express.Router()

router.get('/magazines', MagazineControllerFacade.showAllNodes)

export default router
