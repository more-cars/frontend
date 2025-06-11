import express from "express"
import {displayAll} from "../controllers/brands/displayAll"
import {displayNode} from "../controllers/brands/displayNode"

const router = express.Router()

router.get('/brands', displayAll)
router.get('/brands/:id', displayNode)

export default router
