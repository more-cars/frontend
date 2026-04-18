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

    console.log({
        protocol: req.protocol,
        host: req.get("host"),
        originalUrl: req.originalUrl,
        forwarded: req.headers['x-forwarded-for'],
        ip: req.ip,
        userAgent: req.headers["user-agent"],
        path: req.path,
        url: req.url,
    })

    trackVisit(req, {
        action: req.path
    }).catch(() => {
        console.error('Matomo Logging Error')
    })

    next()
}
