import express from "express"
import {CanonicalUrlControllerFacade} from "../controllers/CanonicalUrlControllerFacade"

const router = express.Router()

router.get('/:canonicalName-:id', CanonicalUrlControllerFacade.showNode)
router.get('/:legacyUrl', CanonicalUrlControllerFacade.redirectLegacyUrl)
router.get('/:shortUrl', CanonicalUrlControllerFacade.redirectShortUrl)
router.get('/:nodeType/:id', CanonicalUrlControllerFacade.redirectNodeTypeUrl)

export default router
