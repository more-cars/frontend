import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {ImageModelFacade} from "../../../models/ImageModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getNodeProperties} from "../../../specification/getNodeProperties"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const images = await ImageModelFacade.getAllNodes({page})

    res.render('templates/node-types/images/image-overview-page', {
        page_title: 'All Images',
        main_headline: 'All Images',
        node_type: ControllerNodeType.IMAGE,
        node_collection: images,
        thumbnails: await getNodeThumbnails(images),
        node_properties: getNodeProperties(ControllerNodeType.IMAGE),
        pagination: {
            page,
            total: await ImageModelFacade.getTotalNodeCount(),
        },
    })
}
