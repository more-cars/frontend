import express from "express"
import {displayNode} from "./car-models/displayNode"
import {displayAllNodes} from "./car-models/displayAllNodes"

export class CarModelFacade {
    static async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    }

    static async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    }
}
