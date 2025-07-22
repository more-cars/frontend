import express from "express"
import {displayAllNodes} from "../controllers/images/displayAllNodes.ts"
import {displayNode} from "../controllers/images/displayNode.ts"

const router = express.Router()

router.get('/images', displayAllNodes)
router.get('/images/:id', displayNode)

export default router
