import express from "express"
import {displayAllNodes} from "./node-types/videos/displayAllNodes"

export const VideoControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
