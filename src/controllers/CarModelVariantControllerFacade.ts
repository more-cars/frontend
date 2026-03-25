import express from "express"
import {displayAllNodes} from "./node-types/car-model-variants/displayAllNodes"
import {displayNode} from "./node-types/car-model-variants/displayNode"

export const CarModelVariantControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
