import express from "express"
import {displayAllNodes} from "./node-types/model-cars/displayAllNodes"

export const ModelCarControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
