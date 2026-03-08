import express from "express"
import {displayAllNodes} from "./node-types/magazines/displayAllNodes"

export const MagazineControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
