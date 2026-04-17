import express from "express"
import {RatingControllerFacade} from "../../controllers/RatingControllerFacade"

const router = express.Router()

router.get('/ratings', RatingControllerFacade.showAllNodes)
router.get('/ratings/:id', RatingControllerFacade.showNode)

export default router
