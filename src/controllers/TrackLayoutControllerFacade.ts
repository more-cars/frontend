import express from "express"
import {displayAllNodes} from "./node-types/track-layouts/displayAllNodes"
import {displayNode} from "./node-types/track-layouts/displayNode"

export const TrackLayoutControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
