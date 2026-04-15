import express from "express"

export function isAsset(req: express.Request) {
    return req.path.match(/\.(css|js|png|jpg|jpeg|gif|svg|woff|woff2|ttf|ico|webp)$/i)
}
