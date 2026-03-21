import express from "express"
import {displayAllNodes} from "./node-types/model-cars/displayAllNodes"
import {displayNode} from "./node-types/model-cars/displayNode"

export const ModelCarControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
