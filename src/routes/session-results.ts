import express from "express"
import {SessionResultControllerFacade} from "../controllers/SessionResultControllerFacade"

const router = express.Router()

router.get('/session-results', SessionResultControllerFacade.showAllNodes)
router.get('/session-results/:id', SessionResultControllerFacade.showNode)

export default router
