import express from "express"
import {LegalPagesControllerFacade} from "../controllers/LegalPagesControllerFacade"

const router = express.Router()

router.get('/contact', LegalPagesControllerFacade.contact)
router.get('/privacy', LegalPagesControllerFacade.privacy)

export default router
