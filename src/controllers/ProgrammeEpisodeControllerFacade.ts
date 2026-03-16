import express from "express"
import {displayAllNodes} from "./node-types/programme-episodes/displayAllNodes"
import {displayNode} from "./node-types/programme-episodes/displayNode"

export const ProgrammeEpisodeControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
