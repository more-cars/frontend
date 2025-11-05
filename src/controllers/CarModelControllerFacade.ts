import express from "express"
import {displayNode} from "./node-types/car-models/displayNode"
import {displayAllNodes} from "./node-types/car-models/displayAllNodes"

export class CarModelControllerFacade {
    static async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    }

    static async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    }
}
