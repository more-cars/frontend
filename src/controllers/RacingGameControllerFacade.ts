import express from "express"
import {displayAllNodes} from "./node-types/racing-games/displayAllNodes"
import {RedirectControllerFacade} from "./RedirectControllerFacade"

export const RacingGameControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await RedirectControllerFacade.redirectNodeTypeUrl(req, res)
    },
}
