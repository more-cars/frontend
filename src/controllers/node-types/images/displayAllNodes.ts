import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {ImageModelFacade} from "../../../models/ImageModelFacade"
import {getPrimaryProperties} from "../../../models/node-types/getPrimaryProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {Image} from "../../../models/node-types/images/types/Image"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const images = await ImageModelFacade.getAllNodes({page})

    return res.render('templates/images/images-page', {
        pageTitle: 'All Images',
        nodeCollection: images,
        primaryProperties: getPrimaryProperties(DataNodeType.IMAGE),
        thumbnails: await getThumbnails(images),
        pagination: {
            page,
        },
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}

async function getThumbnails(images: Image[]) {
    const thumbnails = []

    for (const image of images) {
        thumbnails[image.id] = image
    }

    return thumbnails
}
