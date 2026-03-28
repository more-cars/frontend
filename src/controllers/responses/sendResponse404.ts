import express from "express"

export function sendResponse404(res: express.Response) {
    return res.render('templates/nodes/node-not-found-page', {
        page_title: `Requested information not found`
    }, (error, html) => {
        res.statusCode = 404
        res.send(html)
    })
}
