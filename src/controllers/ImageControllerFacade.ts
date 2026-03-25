import express from "express"
import {displayNode} from "./node-types/images/displayNode"
import {displayAllNodes} from "./node-types/images/displayAllNodes"

export const ImageControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
