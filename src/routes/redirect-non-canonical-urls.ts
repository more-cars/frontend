import express from "express"
import {RedirectControllerFacade} from "../controllers/RedirectControllerFacade"

const router = express.Router()

router.get('/:legacyUrl', RedirectControllerFacade.redirectLegacyUrl)
router.get('/:shortUrl', RedirectControllerFacade.redirectShortUrl)

export default router
