import express from "express"
import {displayAllNodes} from "./node-types/brands/displayAllNodes"
import {displayNode} from "./node-types/brands/displayNode"

export class BrandControllerFacade {
    static async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    }

    static async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    }
}
