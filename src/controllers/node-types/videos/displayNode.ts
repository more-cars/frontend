import express from "express"
import {VideoModelFacade} from "../../../models/VideoModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {sendResponse404} from "../../responses/sendResponse404"

export async function displayNode(req: express.Request, res: express.Response) {
    const videoId = parseInt(req.params.id)
    const video = await VideoModelFacade.getNodeById(videoId)

    if (!video) {
        return sendResponse404(res)
    }

    const nodes = await VideoModelFacade.getConnectedNodes(videoId)

    res.render('templates/node-types/videos/video-detail-page', {
        page_title: `${video.fields.title} - Video`,
        node: {
            type: ControllerNodeType.VIDEO,
            data: video,
            title: VideoModelFacade.getNodeTitle(video),
            sub_title: VideoModelFacade.getNodeSubTitle(video),
            node_properties: getNodeProperties(DataNodeType.VIDEO),
            main_video: video,
        },
        relationships: {
            nodes: {
                items: nodes,
                node_properties: getNodeProperties(DataNodeType.BRAND),
                thumbnails: await getNodeThumbnails(nodes),
            },
        },
    })
}
