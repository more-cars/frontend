import express from "express"
import {Image} from "../../models/Image"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const images = await Image.findAll()

    return res.render('templates/images/images-page', {
        pageTitle: 'All Images',
        nodeCollection: images
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
