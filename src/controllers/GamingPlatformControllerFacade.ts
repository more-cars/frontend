import express from "express"
import {displayAllNodes} from "./node-types/gaming-platforms/displayAllNodes"

export const GamingPlatformControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
