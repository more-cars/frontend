import express from "express"
import {displayAllNodes} from "./node-types/lap-times/displayAllNodes"

export const LapTimeControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
