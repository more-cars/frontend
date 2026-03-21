import express from "express"
import {displayAllNodes} from "./node-types/model-car-brands/displayAllNodes"

export const ModelCarBrandControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
