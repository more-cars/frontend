import express from "express"
import {displayAllNodes} from "./node-types/lap-times/displayAllNodes"
import {displayNode} from "./node-types/lap-times/displayNode"

export const LapTimeControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
