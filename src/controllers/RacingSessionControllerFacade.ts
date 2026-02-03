import express from "express"
import {displayAllNodes} from "./node-types/racing-sessions/displayAllNodes"

export const RacingSessionControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
