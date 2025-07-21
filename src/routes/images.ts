import express from "express"
import {displayAllNodes} from "../controllers/images/displayAllNodes.ts"

const router = express.Router()

router.get('/images', displayAllNodes)

export default router
