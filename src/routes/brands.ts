import express from "express"
import {displayAllNodes} from "../controllers/brands/displayAllNodes.ts"
import {displayNode} from "../controllers/brands/displayNode.ts"

const router = express.Router()

router.get('/brands/:id', displayNode)
router.get('/brands', displayAllNodes)

export default router
