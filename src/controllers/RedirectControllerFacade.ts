import express, {type NextFunction} from "express"
import {redirectLegacyUrlToCanonical} from "./redirects/redirectLegacyUrlToCanonical"
import {redirectShortUrlToCanonical} from "./redirects/redirectShortUrlToCanonical"

export const RedirectControllerFacade = {
    async redirectLegacyUrl(req: express.Request, res: express.Response, next: NextFunction) {
        await redirectLegacyUrlToCanonical(req, res, next)
    },

    async redirectShortUrl(req: express.Request, res: express.Response, next: NextFunction) {
        await redirectShortUrlToCanonical(req, res, next)
    },
}
