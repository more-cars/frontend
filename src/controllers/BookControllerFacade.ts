import express from "express"
import {displayAllNodes} from "./node-types/books/displayAllNodes"

export const BookControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
