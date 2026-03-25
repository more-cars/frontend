import express from "express"
import {displayAllNodes} from "./node-types/model-car-brands/displayAllNodes"
import {displayNode} from "./node-types/model-car-brands/displayNode"

export const ModelCarBrandControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
