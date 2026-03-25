import express from "express"
import {displayAllNodes} from "./node-types/prices/displayAllNodes"
import {displayNode} from "./node-types/prices/displayNode"

export const PriceControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
