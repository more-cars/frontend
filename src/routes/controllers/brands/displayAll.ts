import express from "express"

export async function displayAll(req: express.Request, res: express.Response) {
    const renderedView = "<h1>All Brands</h1>"

    res.status(200)
    res.set('Content-Type', 'text/html')
    res.send(renderedView)
}
