import express from "express"
import {LegalPagesControllerFacade} from "../controllers/LegalPagesControllerFacade"

const router = express.Router()

router.get('/contact', LegalPagesControllerFacade.contact)

export default router
