import express from "express"
import {displayAllNodes} from "./node-types/racing-events/displayAllNodes"
import {RedirectControllerFacade} from "./RedirectControllerFacade"

export const RacingEventControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await RedirectControllerFacade.redirectNodeTypeUrl(req, res)
    },
}
