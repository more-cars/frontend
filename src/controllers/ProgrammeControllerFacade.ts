import express from "express"
import {displayAllNodes} from "./node-types/programmes/displayAllNodes"

export const ProgrammeControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
