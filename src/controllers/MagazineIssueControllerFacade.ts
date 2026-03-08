import express from "express"
import {displayAllNodes} from "./node-types/magazine-issues/displayAllNodes"

export const MagazineIssueControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
