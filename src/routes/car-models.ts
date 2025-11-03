import express from "express"
import {displayAllNodes} from "../controllers/car-models/displayAllNodes"
import {displayNode} from "../controllers/car-models/displayNode"

const router = express.Router()

router.get('/car-models', displayAllNodes)
router.get('/car-models/:id', displayNode)

export default router
