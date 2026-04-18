import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {VideoModelFacade} from "../../../models/VideoModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getVideoThumbnails} from "./getVideoThumbnails"
import {getNodeProperties} from "../../../specification/getNodeProperties"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const videos = await VideoModelFacade.getAllNodes({page})

    res.render('templates/node-types/videos/video-overview-page', {
        page_title: 'All Videos',
        main_headline: 'All Videos',
        node_type: ControllerNodeType.VIDEO,
        node_collection: videos,
        thumbnails: await getVideoThumbnails(videos),
        node_properties: getNodeProperties(ControllerNodeType.VIDEO),
        pagination: {
            page,
            total: await VideoModelFacade.getTotalNodeCount(),
        },
    })
}
