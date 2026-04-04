import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {VideoModelFacade} from "../../../models/VideoModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getAllNodeTitles} from "../../lib/getAllNodeTitles"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const videos = await VideoModelFacade.getAllNodes({page})

    res.render('templates/node-types/videos/video-overview-page', {
        page_title: 'All Videos',
        main_headline: 'All Videos',
        node_type: ControllerNodeType.VIDEO,
        node_collection: videos,
        node_titles: getAllNodeTitles(videos, VideoModelFacade.getNodeTitle),
        node_properties: getNodeProperties(DataNodeType.VIDEO),
        pagination: {
            page,
            total: await VideoModelFacade.getTotalNodeCount(),
        },
    })
}
