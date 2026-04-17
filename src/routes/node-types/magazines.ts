import express from "express"
import {MagazineControllerFacade} from "../../controllers/MagazineControllerFacade"

const router = express.Router()

router.get('/magazines', MagazineControllerFacade.showAllNodes)
router.get('/magazines/:id', MagazineControllerFacade.showNode)

export default router
