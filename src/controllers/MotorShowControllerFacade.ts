import express from "express"
import {displayAllNodes} from "./node-types/motor-shows/displayAllNodes"

export const MotorShowControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
