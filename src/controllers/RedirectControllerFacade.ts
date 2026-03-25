import express, {type NextFunction} from "express"
import {redirectLegacyUrlToCanonical} from "./redirects/redirectLegacyUrlToCanonical"
import {redirectShortUrlToCanonical} from "./redirects/redirectShortUrlToCanonical"
import {redirectNodeTypeUrlToCanonical} from "./redirects/redirectNodeTypeUrlToCanonical"

export const RedirectControllerFacade = {
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
