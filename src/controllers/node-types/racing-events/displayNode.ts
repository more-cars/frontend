import express from "express"
import {RacingEventModelFacade} from "../../../models/RacingEventModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getVideoThumbnails} from "../videos/getVideoThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const racingEventId = parseInt(req.params.id)
    const racingEvent = await RacingEventModelFacade.getNodeById(racingEventId)

    if (!racingEvent) {
        return sendResponse404(res)
    }

    const racingSeries = await RacingEventModelFacade.getConnectedRacingSeries(racingEventId)
    const predecessor = await RacingEventModelFacade.getConnectedPredecessor(racingEventId)
    const successor = await RacingEventModelFacade.getConnectedSuccessor(racingEventId)
    const raceTrack = await RacingEventModelFacade.getConnectedRaceTrack(racingEventId)
    const trackLayout = await RacingEventModelFacade.getConnectedTrackLayout(racingEventId)
    const racingSessions = await RacingEventModelFacade.getConnectedRacingSessions(racingEventId)
    const magazineIssues = await RacingEventModelFacade.getConnectedMagazineIssues(racingEventId)
    const images = await RacingEventModelFacade.getConnectedImages(racingEventId)
    const videos = await RacingEventModelFacade.getConnectedVideos(racingEventId)

    res.render('templates/node-types/racing-events/racing-event-detail-page', {
        page_title: `${racingEvent.fields.name} - Racing Event`,
        node: {
            data: racingEvent,
            title: RacingEventModelFacade.getNodeTitle(racingEvent),
            sub_title: RacingEventModelFacade.getNodeSubTitle(racingEvent),
            node_properties: getNodeProperties(DataNodeType.RACING_EVENT),
            main_image: await RacingEventModelFacade.getConnectedMainImage(racingEventId),
        },
        relationships: {
            racing_series: {
                item: racingSeries,
                node_properties: getNodeProperties(DataNodeType.RACING_SERIES),
                thumbnails: await getNodeThumbnails(racingSeries ? [racingSeries] : []),
            },
            predecessor: {
                item: predecessor,
                node_properties: getNodeProperties(DataNodeType.RACING_EVENT),
                thumbnails: await getNodeThumbnails(predecessor ? [predecessor] : []),
            },
            successor: {
                item: successor,
                node_properties: getNodeProperties(DataNodeType.RACING_EVENT),
                thumbnails: await getNodeThumbnails(successor ? [successor] : []),
            },
            race_track: {
                item: raceTrack,
                node_properties: getNodeProperties(DataNodeType.RACE_TRACK),
                thumbnails: await getNodeThumbnails(raceTrack ? [raceTrack] : []),
            },
            track_layout: {
                item: trackLayout,
                node_properties: getNodeProperties(DataNodeType.TRACK_LAYOUT),
                thumbnails: await getNodeThumbnails(trackLayout ? [trackLayout] : []),
            },
            racing_sessions: {
                items: racingSessions,
                node_properties: getNodeProperties(DataNodeType.RACING_SESSION),
                thumbnails: await getNodeThumbnails(racingSessions),
            },
            magazine_issues: {
                items: magazineIssues,
                node_properties: getNodeProperties(DataNodeType.MAGAZINE_ISSUE),
                thumbnails: await getNodeThumbnails(magazineIssues),
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
