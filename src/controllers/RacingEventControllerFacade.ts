import express from "express"
import {displayAllNodes} from "./node-types/racing-events/displayAllNodes"

export const RacingEventControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
