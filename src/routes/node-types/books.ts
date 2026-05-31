import express from "express"
import {BookControllerFacade} from "../../controllers/BookControllerFacade"

const router = express.Router()

router.get('/books', BookControllerFacade.showAllNodes)

export default router
