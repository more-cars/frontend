import express from "express"
import {displayAllNodes} from "./node-types/car-models/displayAllNodes"
import {RedirectControllerFacade} from "./RedirectControllerFacade"

export const CarModelControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await RedirectControllerFacade.redirectNodeTypeUrl(req, res)
    },
}
