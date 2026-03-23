import express, {type NextFunction} from "express"
import {redirectLegacyUrlToCanonical} from "./redirects/redirectLegacyUrlToCanonical"

export const RedirectControllerFacade = {
    async redirectLegacyUrl(req: express.Request, res: express.Response, next: NextFunction) {
        await redirectLegacyUrlToCanonical(req, res, next)
    },
}
