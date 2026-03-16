import express from "express"
import {ProgrammeControllerFacade} from "../controllers/ProgrammeControllerFacade"

const router = express.Router()

router.get('/programmes', ProgrammeControllerFacade.showAllNodes)

export default router
