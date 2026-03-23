import express from "express"
import {RedirectControllerFacade} from "../controllers/RedirectControllerFacade"

const router = express.Router()

router.get('/:legacyUrl', RedirectControllerFacade.redirectLegacyUrl)

export default router
