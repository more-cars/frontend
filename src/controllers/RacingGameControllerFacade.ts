import express from "express"
import {displayAllNodes} from "./node-types/racing-games/displayAllNodes"
import {displayNode} from "./node-types/racing-games/displayNode"

export const RacingGameControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
