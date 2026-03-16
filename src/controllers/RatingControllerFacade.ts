import express from "express"
import {displayAllNodes} from "./node-types/ratings/displayAllNodes"

export const RatingControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
