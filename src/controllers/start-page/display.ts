import express from "express"

export async function display(req: express.Request, res: express.Response) {
    return res.render('templates/start-page/start-page', {
        page_title: 'More Cars',
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
