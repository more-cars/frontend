import express from "express"

export async function ready(req: express.Request, res: express.Response) {
    res.set('Content-Type', 'text/plain')
    res.set('Cache-Control', 'no-cache')

    try {
        await fetch(process.env.API_URL as string)
        res.status(200)
        res.send("ready")
    } catch {
        res.status(503)
        res.send("not ready")
    }
}
