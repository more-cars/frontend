import express from "express"
import {displayAllNodes} from "./node-types/brands/displayAllNodes"
import {displayNode} from "./node-types/brands/displayNode"

export const BrandControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
