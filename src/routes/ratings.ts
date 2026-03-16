import express from "express"
import {RatingControllerFacade} from "../controllers/RatingControllerFacade"

const router = express.Router()

router.get('/ratings', RatingControllerFacade.showAllNodes)

export default router
