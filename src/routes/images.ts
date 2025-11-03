import express from "express"
import {displayAllNodes} from "../controllers/images/displayAllNodes"
import {displayNode} from "../controllers/images/displayNode"

const router = express.Router()

router.get('/images', displayAllNodes)
router.get('/images/:id', displayNode)

export default router
