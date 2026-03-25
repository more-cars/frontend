import express from "express"
import {displayNode} from "./slugs/displayNode"

export const SlugControllerFacade = {
    async showNode(req: express.Request, res: express.Response, next: express.NextFunction) {
        await displayNode(req, res, next)
    },
}
