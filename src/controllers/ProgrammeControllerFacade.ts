import express from "express"
import {displayAllNodes} from "./node-types/programmes/displayAllNodes"
import {RedirectControllerFacade} from "./RedirectControllerFacade"

export const ProgrammeControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await RedirectControllerFacade.redirectNodeTypeUrl(req, res)
    },
}
