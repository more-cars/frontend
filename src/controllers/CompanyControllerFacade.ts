import express from "express"
import {displayAllNodes} from "./node-types/companies/displayAllNodes"

export class CompanyControllerFacade {
    static async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    }
}
