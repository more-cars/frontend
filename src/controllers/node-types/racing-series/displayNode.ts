import express from "express"
import {RacingSeriesModelFacade} from "../../../models/RacingSeriesModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getVideoThumbnails} from "../videos/getVideoThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const racingSeriesId = parseInt(req.params.id)
    const racingSeries = await RacingSeriesModelFacade.getNodeById(racingSeriesId)

    if (!racingSeries) {
        return sendResponse404(res)
    }

    const images = await RacingSeriesModelFacade.getConnectedImages(racingSeriesId)
    const racingEvents = await RacingSeriesModelFacade.getConnectedRacingEvents(racingSeriesId)
    const videos = await RacingSeriesModelFacade.getConnectedVideos(racingSeriesId)

    res.render('templates/node-types/racing-series/racing-series-detail-page', {
        page_title: `${racingSeries.fields.name} - Racing Series`,
        node: {
            type: ControllerNodeType.RACING_SERIES,
            data: racingSeries,
            title: RacingSeriesModelFacade.getNodeTitle(racingSeries),
            sub_title: RacingSeriesModelFacade.getNodeSubTitle(racingSeries),
            node_properties: getNodeProperties(DataNodeType.RACING_SERIES),
            main_image: await RacingSeriesModelFacade.getConnectedMainImage(racingSeriesId),
        },
        relationships: {
            racing_events: {
                items: racingEvents,
                node_properties: getNodeProperties(DataNodeType.RACING_EVENT),
                thumbnails: await getNodeThumbnails(racingEvents),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
            videos: {
                items: videos,
                node_properties: getNodeProperties(DataNodeType.VIDEO),
                thumbnails: await getVideoThumbnails(videos),
            },
        },
    })
}
