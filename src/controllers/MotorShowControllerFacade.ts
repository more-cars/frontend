import express from "express"
import {displayAllNodes} from "./node-types/motor-shows/displayAllNodes"
import {displayNode} from "./node-types/motor-shows/displayNode"

export const MotorShowControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
