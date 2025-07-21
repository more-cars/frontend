import express from "express"
import {Image} from "../../models/Image.ts"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const images = await Image.findAll()

    res.render('templates/images/images-page', {
        pageTitle: 'All Images',
        nodeCollection: images
    })
}
