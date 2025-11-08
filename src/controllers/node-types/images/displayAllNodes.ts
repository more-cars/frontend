import express from "express"
import {ImageModelFacade} from "../../../models/ImageModelFacade"
import {getPrimaryProperties} from "../../../models/node-types/getPrimaryProperties"
import {ImageNode} from "../../../data/node-types/images/types/ImageNode"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const images = await ImageModelFacade.getAllNodes()

    return res.render('templates/images/images-page', {
        pageTitle: 'All Images',
        nodeCollection: images,
        primaryProperties: getPrimaryProperties(),
        thumbnails: await getThumbnails(images),
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}

async function getThumbnails(images: ImageNode[]) {
    const thumbnails = []

    for (const image of images) {
        thumbnails[image.id] = image
    }

    return thumbnails
}
