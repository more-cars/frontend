import express from "express"
import {displayAllNodes} from "./node-types/session-results/displayAllNodes"

export const SessionResultControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
