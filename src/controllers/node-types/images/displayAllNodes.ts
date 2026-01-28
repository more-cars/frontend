import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {ImageModelFacade} from "../../../models/ImageModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {Image} from "../../../models/node-types/images/types/Image"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const images = await ImageModelFacade.getAllNodes({page})

    res.render('templates/node-types/images/images-page', {
        page_title: 'All Images',
        main_headline: 'All Images',
        node_collection: images,
        node_properties: getNodeProperties(DataNodeType.IMAGE),
        thumbnails: await getThumbnails(images),
        pagination: {
            page,
            total: 18095,
        },
    })
}

async function getThumbnails(images: Image[]) {
    const thumbnails = []

    for (const image of images) {
        thumbnails[image.id] = image
    }

    return thumbnails
}
