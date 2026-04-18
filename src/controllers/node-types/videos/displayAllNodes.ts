import express from "express"
import {VideoModelFacade} from "../../../models/VideoModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getVideoThumbnails} from "./getVideoThumbnails"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {determineSearchParams} from "../../lib/determineSearchParams"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const searchParams = determineSearchParams(req)
    const videos = await VideoModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/videos/video-overview-page', {
        page_title: 'All Videos',
        main_headline: 'All Videos',
        node_type: ControllerNodeType.VIDEO,
        node_collection: videos,
        thumbnails: await getVideoThumbnails(videos),
        node_properties: getNodeProperties(ControllerNodeType.VIDEO),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await VideoModelFacade.getTotalNodeCount(),
        },
    })
}
