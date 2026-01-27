import express from "express"
import {displayAllNodes} from "./node-types/race-tracks/displayAllNodes"
import {displayNode} from "./node-types/race-tracks/displayNode"

export const RaceTrackControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
