import express from "express"

export function sendResponse400(res: express.Response) {
    return res.render('templates/nodes/invalid-request-page', {
        page_title: `Invalid request`
    }, (error, html) => {
        res.statusCode = 400
        res.send(html)
    })
}
