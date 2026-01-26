import express from "express"
import {displayAllNodes} from "./node-types/companies/displayAllNodes"
import {displayNode} from "./node-types/companies/displayNode"

export const CompanyControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
