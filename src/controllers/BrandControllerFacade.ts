import express from "express"
import {displayNode} from "./brands/displayNode"
import {displayAllNodes} from "./brands/displayAllNodes"

export class BrandControllerFacade {
    static async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    }

    static async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    }
}
