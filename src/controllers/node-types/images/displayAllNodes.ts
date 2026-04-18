import express from "express"
import {ImageModelFacade} from "../../../models/ImageModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {determineSearchParams} from "../../lib/determineSearchParams"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const searchParams = determineSearchParams(req)
    const images = await ImageModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/images/image-overview-page', {
        page_title: 'All Images',
        main_headline: 'All Images',
        node_type: ControllerNodeType.IMAGE,
        node_collection: images,
        thumbnails: await getNodeThumbnails(images),
        node_properties: getNodeProperties(ControllerNodeType.IMAGE),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await ImageModelFacade.getTotalNodeCount(),
        },
    })
}
