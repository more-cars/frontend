import express from "express"
import {displayAllNodes} from "./node-types/racing-games/displayAllNodes"

export const RacingGameControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
