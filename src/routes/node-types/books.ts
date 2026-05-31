import express from "express"
import {BookControllerFacade} from "../../controllers/BookControllerFacade"

const router = express.Router()

router.get('/books', BookControllerFacade.showAllNodes)
router.get('/books/:id', BookControllerFacade.showNode)

export default router
