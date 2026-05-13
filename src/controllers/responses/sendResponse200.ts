import express from "express"

export function sendResponse200(data: unknown, res: express.Response) {
    res.set('Content-Type', 'text/html; charset=utf-8')
    res.set('Content-Security-Policy', "default-src 'self'; img-src 'self' data: upload.wikimedia.org live.staticflickr.com i.ytimg.com; frame-src www.youtube-nocookie.com")
    res.set('Cache-Control', 'public, max-age=600, stale-while-revalidate=60')
    res.send(data)
}
