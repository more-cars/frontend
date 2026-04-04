import express from "express"
import {displayAllNodes} from "./node-types/videos/displayAllNodes"
import {displayNode} from "./node-types/videos/displayNode"

export const VideoControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
