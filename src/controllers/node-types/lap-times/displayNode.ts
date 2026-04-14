import express from "express"
import {LapTimeModelFacade} from "../../../models/LapTimeModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getVideoThumbnails} from "../videos/getVideoThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const lapTimeId = parseInt(req.params.id)
    const lapTime = await LapTimeModelFacade.getNodeById(lapTimeId)

    if (!lapTime) {
        return sendResponse404(res)
    }

    const trackLayout = await LapTimeModelFacade.getConnectedTrackLayout(lapTimeId)
    const sessionResult = await LapTimeModelFacade.getConnectedSessionResult(lapTimeId)
    const images = await LapTimeModelFacade.getConnectedImages(lapTimeId)
    const carModelVariant = await LapTimeModelFacade.getConnectedCarModelVariant(lapTimeId)
    const videos = await LapTimeModelFacade.getConnectedVideos(lapTimeId)

    res.render('templates/node-types/lap-times/lap-time-detail-page', {
        page_title: `${LapTimeModelFacade.getNodeTitle(lapTime)} - Lap Time`,
        node: {
            type: ControllerNodeType.LAP_TIME,
            data: lapTime,
            title: LapTimeModelFacade.getNodeTitle(lapTime),
            sub_title: LapTimeModelFacade.getNodeSubTitle(lapTime),
            node_properties: getNodeProperties(DataNodeType.LAP_TIME),
            main_image: await LapTimeModelFacade.getConnectedMainImage(lapTimeId),
        },
        relationships: {
            car_model_variant: {
                item: carModelVariant,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL_VARIANT),
                thumbnails: await getNodeThumbnails(carModelVariant ? [carModelVariant] : []),
            },
            track_layout: {
                item: trackLayout,
                node_properties: getNodeProperties(DataNodeType.TRACK_LAYOUT),
                thumbnails: await getNodeThumbnails(trackLayout ? [trackLayout] : []),
            },
            session_result: {
                item: sessionResult,
                node_properties: getNodeProperties(DataNodeType.SESSION_RESULT),
                thumbnails: await getNodeThumbnails(sessionResult ? [sessionResult] : []),
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
