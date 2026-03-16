import express from "express"
import {displayAllNodes} from "./node-types/programme-episodes/displayAllNodes"

export const ProgrammeEpisodeControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
