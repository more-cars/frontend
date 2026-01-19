import express from "express"
import {displayAllNodes} from "./node-types/companies/displayAllNodes"
import {displayNode} from "./node-types/companies/displayNode"

export class CompanyControllerFacade {
    static async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    }

    static async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    }
}
