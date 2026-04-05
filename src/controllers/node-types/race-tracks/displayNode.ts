import express from "express"
import {RaceTrackModelFacade} from "../../../models/RaceTrackModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getVideoThumbnails} from "../videos/getVideoThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const raceTrackId = parseInt(req.params.id)
    const raceTrack = await RaceTrackModelFacade.getNodeById(raceTrackId)

    if (!raceTrack) {
        return sendResponse404(res)
    }

    const trackLayouts = await RaceTrackModelFacade.getConnectedTrackLayouts(raceTrackId)
    const racingEvents = await RaceTrackModelFacade.getConnectedRacingEvents(raceTrackId)
    const images = await RaceTrackModelFacade.getConnectedImages(raceTrackId)
    const videos = await RaceTrackModelFacade.getConnectedVideos(raceTrackId)

    res.render('templates/node-types/race-tracks/race-track-detail-page', {
        page_title: `${raceTrack.fields.name} - Race Track`,
        node: {
            type: ControllerNodeType.RACE_TRACK,
            data: raceTrack,
            title: RaceTrackModelFacade.getNodeTitle(raceTrack),
            sub_title: RaceTrackModelFacade.getNodeSubTitle(raceTrack),
            node_properties: getNodeProperties(DataNodeType.RACE_TRACK),
            main_image: await RaceTrackModelFacade.getConnectedMainImage(raceTrackId),
        },
        relationships: {
            track_layouts: {
                items: await RaceTrackModelFacade.getConnectedTrackLayouts(raceTrackId),
                node_properties: getNodeProperties(DataNodeType.TRACK_LAYOUT),
                thumbnails: await getNodeThumbnails(trackLayouts),
            },
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
