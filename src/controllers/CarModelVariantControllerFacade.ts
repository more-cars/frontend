import express from "express"
import {displayAllNodes} from "./node-types/car-model-variants/displayAllNodes"

export const CarModelVariantControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
