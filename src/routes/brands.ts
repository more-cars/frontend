import express from "express"
import {displayAll} from "./controllers/brands/displayAll"

const router = express.Router()

router.get('/brands', displayAll)

export default router
