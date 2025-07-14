import express from "express"
import {displayAllNodes} from "../controllers/car-models/displayAllNodes.ts"

const router = express.Router()

router.get('/car-models', displayAllNodes)

export default router
