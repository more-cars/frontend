import express from "express"
import {displayAllNodes} from "./node-types/prices/displayAllNodes"

export const PriceControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
