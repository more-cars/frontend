import express from "express"
import {CompanyControllerFacade} from "../controllers/CompanyControllerFacade"

const router = express.Router()

router.get('/companies', CompanyControllerFacade.showAllNodes)
router.get('/companies/:id', CompanyControllerFacade.showNode)

export default router
