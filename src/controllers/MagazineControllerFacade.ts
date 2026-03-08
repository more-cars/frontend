import express from "express"
import {displayAllNodes} from "./node-types/magazines/displayAllNodes"
import {displayNode} from "./node-types/magazines/displayNode"

export const MagazineControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
