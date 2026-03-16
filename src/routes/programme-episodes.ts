import express from "express"
import {ProgrammeEpisodeControllerFacade} from "../controllers/ProgrammeEpisodeControllerFacade"

const router = express.Router()

router.get('/programme-episodes', ProgrammeEpisodeControllerFacade.showAllNodes)

export default router
