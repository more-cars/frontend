import express from "express"
import {displayAllNodes} from "./node-types/ratings/displayAllNodes"
import {displayNode} from "./node-types/ratings/displayNode"

export const RatingControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
