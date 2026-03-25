import express from "express"
import {displayAllNodes} from "./node-types/session-results/displayAllNodes"
import {displayNode} from "./node-types/session-results/displayNode"

export const SessionResultControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
