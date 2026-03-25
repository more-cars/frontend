import express from "express"
import {displayAllNodes} from "./node-types/magazine-issues/displayAllNodes"
import {displayNode} from "./node-types/magazine-issues/displayNode"

export const MagazineIssueControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },

    async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)
    },
}
