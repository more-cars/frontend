import express from "express"
import {trackVisit} from "./trackVisit"
import {isAsset} from "./isAsset"

export function analyticsMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (!process.env.ANALYTICS_URL) {
        return next()
    }

    if (isAsset(req)) {
        return next()
    }

    trackVisit(req, {
        action: req.path
    }).catch(() => {
        console.error('Matomo Logging Error')
    })

    next()
}
