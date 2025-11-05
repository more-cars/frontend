import express from "express"
import {displayNode} from "./node-types/brands/displayNode"
import {displayAllNodes} from "./node-types/brands/displayAllNodes"

export class BrandControllerFacade {
    static async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    }

    static async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    }
}
