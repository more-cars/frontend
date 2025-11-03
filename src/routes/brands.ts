import express from "express"
import {displayAllNodes} from "../controllers/brands/displayAllNodes"
import {displayNode} from "../controllers/brands/displayNode"

const router = express.Router()

router.get('/brands', displayAllNodes)
router.get('/brands/:id', displayNode)

export default router
