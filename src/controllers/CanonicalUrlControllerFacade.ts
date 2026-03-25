import express, {type NextFunction} from "express"
import {displayNode} from "./canonical/displayNode"
import {redirectLegacyUrlToCanonical} from "./canonical/redirectLegacyUrlToCanonical"
import {redirectShortUrlToCanonical} from "./canonical/redirectShortUrlToCanonical"
import {redirectNodeTypeUrlToCanonical} from "./canonical/redirectNodeTypeUrlToCanonical"

export const CanonicalUrlControllerFacade = {
    async showNode(req: express.Request, res: express.Response, next: express.NextFunction) {
        await displayNode(req, res, next)
    },

    async redirectLegacyUrl(req: express.Request, res: express.Response, next: NextFunction) {
        await redirectLegacyUrlToCanonical(req, res, next)
    },

    async redirectShortUrl(req: express.Request, res: express.Response, next: NextFunction) {
        await redirectShortUrlToCanonical(req, res, next)
    },

    async redirectNodeTypeUrl(req: express.Request, res: express.Response) {
        await redirectNodeTypeUrlToCanonical(req, res)
    },
}
