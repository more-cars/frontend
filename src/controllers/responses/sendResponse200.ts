import express from "express"

export function sendResponse200(data: unknown, res: express.Response) {
    res.set('Content-Type', 'text/html; charset=utf-8')
    res.set('Cache-Control', 'public, max-age=600, stale-while-revalidate=60')
    res.send(data)
}
