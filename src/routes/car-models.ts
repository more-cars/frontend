import express from "express"
import {displayAllNodes} from "../controllers/car-models/displayAllNodes.ts"
import {displayNode} from "../controllers/car-models/displayNode.ts"

const router = express.Router()

router.get('/car-models', displayAllNodes)
router.get('/car-models/:id', displayNode)

export default router
