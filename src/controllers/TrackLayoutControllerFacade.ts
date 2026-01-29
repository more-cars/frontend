import express from "express"
import {displayAllNodes} from "./node-types/track-layouts/displayAllNodes"

export const TrackLayoutControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
