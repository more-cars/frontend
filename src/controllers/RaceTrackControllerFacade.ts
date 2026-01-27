import express from "express"
import {displayAllNodes} from "./node-types/race-tracks/displayAllNodes"

export const RaceTrackControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
