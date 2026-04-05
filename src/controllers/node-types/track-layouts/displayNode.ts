import express from "express"
import {TrackLayoutModelFacade} from "../../../models/TrackLayoutModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getVideoThumbnails} from "../videos/getVideoThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const trackLayoutId = parseInt(req.params.id)
    const trackLayout = await TrackLayoutModelFacade.getNodeById(trackLayoutId)

    if (!trackLayout) {
        return sendResponse404(res)
    }

    const raceTrack = await TrackLayoutModelFacade.getConnectedRaceTrack(trackLayoutId)
    const racingEvents = await TrackLayoutModelFacade.getConnectedRacingEvents(trackLayoutId)
    const racingGames = await TrackLayoutModelFacade.getConnectedRacingGames(trackLayoutId)
    const images = await TrackLayoutModelFacade.getConnectedImages(trackLayoutId)
    const videos = await TrackLayoutModelFacade.getConnectedVideos(trackLayoutId)

    res.render('templates/node-types/track-layouts/track-layout-detail-page', {
        page_title: `${trackLayout.fields.name} - Track Layout`,
        node: {
            type: ControllerNodeType.TRACK_LAYOUT,
            data: trackLayout,
            title: TrackLayoutModelFacade.getNodeTitle(trackLayout),
            sub_title: TrackLayoutModelFacade.getNodeSubTitle(trackLayout),
            node_properties: getNodeProperties(DataNodeType.TRACK_LAYOUT),
            main_image: await TrackLayoutModelFacade.getConnectedMainImage(trackLayoutId),
        },
        relationships: {
            race_track: {
                item: raceTrack,
                node_properties: getNodeProperties(DataNodeType.RACE_TRACK),
                thumbnails: await getNodeThumbnails(raceTrack ? [raceTrack] : []),
            },
            racing_events: {
                items: racingEvents,
                node_properties: getNodeProperties(DataNodeType.RACING_EVENT),
                thumbnails: await getNodeThumbnails(racingEvents),
            },
            racing_games: {
                items: racingGames,
                node_properties: getNodeProperties(DataNodeType.RACING_GAME),
                thumbnails: await getNodeThumbnails(racingGames),
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
