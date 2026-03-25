import express from "express"
import {displayAllNodes} from "./node-types/car-model-variants/displayAllNodes"
import {RedirectControllerFacade} from "./RedirectControllerFacade"

export const CarModelVariantControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await RedirectControllerFacade.redirectNodeTypeUrl(req, res)
    },
}
