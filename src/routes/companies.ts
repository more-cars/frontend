import express from "express"
import {CompanyControllerFacade} from "../controllers/CompanyControllerFacade"

const router = express.Router()

router.get('/companies', CompanyControllerFacade.showAllNodes)

export default router
