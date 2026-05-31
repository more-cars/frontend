import express from "express"
import {displayAllNodes} from "./node-types/books/displayAllNodes"
import {displayNode} from "./node-types/books/displayNode"

export const BookControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
