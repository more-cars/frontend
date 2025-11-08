import express from "express"
import {ImageModelFacade} from "../../../models/ImageModelFacade"
import {getPrimaryProperties} from "../../../models/node-types/getPrimaryProperties"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const images = await ImageModelFacade.getAllNodes()

    return res.render('templates/images/images-page', {
        pageTitle: 'All Images',
        nodeCollection: images,
        primaryProperties: getPrimaryProperties(),
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
