import express from "express"
import {displayNode} from "./node-types/images/displayNode"
import {displayAllNodes} from "./node-types/images/displayAllNodes"

export class ImageControllerFacade {
    static async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    }

    static async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    }
}
