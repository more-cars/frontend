import express from "express"
import {RacingSessionModelFacade} from "../../../models/RacingSessionModelFacade"
import {convertDate} from "../../../views/lib/convertDate"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getVideoThumbnails} from "../videos/getVideoThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const racingSessionId = parseInt(req.params.id)
    const racingSession = await RacingSessionModelFacade.getNodeById(racingSessionId)

    if (!racingSession) {
        return sendResponse404(res)
    }

    const racingEvent = await RacingSessionModelFacade.getConnectedRacingEvent(racingSessionId)
    const sessionResults = await RacingSessionModelFacade.getConnectedSessionResults(racingSessionId)
    const images = await RacingSessionModelFacade.getConnectedImages(racingSessionId)
    const videos = await RacingSessionModelFacade.getConnectedVideos(racingSessionId)

    res.render('templates/node-types/racing-sessions/racing-session-detail-page', {
        page_title: `${racingSession.fields.name} - ${convertDate(racingSession.fields.start_date as string)} - Racing Session`,
        node: {
            data: racingSession,
            title: RacingSessionModelFacade.getNodeTitle(racingSession),
            sub_title: RacingSessionModelFacade.getNodeSubTitle(racingSession),
            node_properties: getNodeProperties(DataNodeType.RACING_SESSION),
            main_image: await RacingSessionModelFacade.getConnectedMainImage(racingSessionId),
        },
        relationships: {
            racing_event: {
                item: racingEvent,
                node_properties: getNodeProperties(DataNodeType.RACING_EVENT),
                thumbnails: await getNodeThumbnails(racingEvent ? [racingEvent] : []),
            },
            session_results: {
                items: sessionResults,
                node_properties: getNodeProperties(DataNodeType.SESSION_RESULT),
                thumbnails: await getNodeThumbnails(sessionResults),
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
