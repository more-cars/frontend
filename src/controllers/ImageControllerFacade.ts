import express from "express"
import {displayNode} from "./node-types/images/displayNode"
import {displayAllNodes} from "./node-types/images/displayAllNodes"

export const ImageControllerFacade = {
    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },

    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
