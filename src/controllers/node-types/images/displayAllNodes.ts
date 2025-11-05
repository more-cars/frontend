import express from "express"
import {ImageModelFacade} from "../../../models/ImageModelFacade"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const images = await ImageModelFacade.getAllNodes()

    return res.render('templates/images/images-page', {
        pageTitle: 'All Images',
        nodeCollection: images
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
