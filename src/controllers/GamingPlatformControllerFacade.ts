import express from "express"
import {displayAllNodes} from "./node-types/gaming-platforms/displayAllNodes"
import {displayNode} from "./node-types/gaming-platforms/displayNode"

export const GamingPlatformControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
