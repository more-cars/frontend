import express from "express"

export function sendResponse404(res: express.Response) {
    return res.render('templates/nodes/node-not-found-page', {
        page_title: `Requested information not found`
    }, (error, html) => {
        res.status(404)
        res.set('Content-Type', 'text/html; charset=utf-8')
        res.set('Content-Security-Policy', "default-src 'self'; img-src 'self' data: upload.wikimedia.org live.staticflickr.com i.ytimg.com; frame-src www.youtube-nocookie.com")
        res.set('Strict-Transport-Security', 'max-age=63072000')
        res.set('X-Content-Type-Options', 'nosniff')
        res.set('X-Frame-Options', 'DENY')
        res.set('Cache-Control', 'public, max-age=30, stale-while-revalidate=60, stale-if-error=600')
        res.send(html)
    })
}
