import express from "express"
import {displayAllNodes} from "./node-types/racing-series/displayAllNodes"
import {displayNode} from "./node-types/racing-series/displayNode"

export const RacingSeriesControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
