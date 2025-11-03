import express from "express"
import {displayNode} from "./images/displayNode"
import {displayAllNodes} from "./images/displayAllNodes"

export class ImageFacade {
    static async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    }

    static async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    }
}
