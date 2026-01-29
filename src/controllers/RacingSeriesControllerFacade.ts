import express from "express"
import {displayAllNodes} from "./node-types/racing-series/displayAllNodes"

export const RacingSeriesControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
