import express from "express"
import {RacingEventModelFacade} from "../../../models/RacingEventModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getRacingSeriesThumbnails} from "../racing-series/getRacingSeriesThumbnails"
import {getRacingEventThumbnails} from "./getRacingEventThumbnails"
import {getRaceTrackThumbnails} from "../race-tracks/getRaceTrackThumbnails"
import {getTrackLayoutThumbnails} from "../track-layouts/getTrackLayoutThumbnails"
import {getRacingSessionThumbnails} from "../racing-sessions/getRacingSessionThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const racingEventId = parseInt(req.params.id)
    const racingEvent = await RacingEventModelFacade.getNodeById(racingEventId)

    if (!racingEvent) {
        return res.render('templates/node-types/racing-events/racing-event-not-found-page', {
            page_title: `Racing Event not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const racingSeries = await RacingEventModelFacade.getConnectedRacingSeries(racingEventId)
    const predecessor = await RacingEventModelFacade.getConnectedPredecessor(racingEventId)
    const successor = await RacingEventModelFacade.getConnectedSuccessor(racingEventId)
    const raceTrack = await RacingEventModelFacade.getConnectedRaceTrack(racingEventId)
    const trackLayout = await RacingEventModelFacade.getConnectedTrackLayout(racingEventId)
    const racingSessions = await RacingEventModelFacade.getConnectedRacingSessions(racingEventId)
    const images = await RacingEventModelFacade.getConnectedImages(racingEventId)

    res.render('templates/node-types/racing-events/racing-event-detail-page', {
        page_title: `${racingEvent.name} - Racing Event`,
        node: {
            data: racingEvent,
            node_properties: getNodeProperties(DataNodeType.RACING_EVENT),
            main_image: await RacingEventModelFacade.getConnectedMainImage(racingEventId),
        },
        relationships: {
            racing_series: {
                item: racingSeries,
                node_properties: getNodeProperties(DataNodeType.RACING_SERIES),
                thumbnails: await getRacingSeriesThumbnails(racingSeries ? [racingSeries] : []),
            },
            predecessor: {
                item: predecessor,
                node_properties: getNodeProperties(DataNodeType.RACING_EVENT),
                thumbnails: await getRacingEventThumbnails(predecessor ? [predecessor] : []),
            },
            successor: {
                item: successor,
                node_properties: getNodeProperties(DataNodeType.RACING_EVENT),
                thumbnails: await getRacingEventThumbnails(successor ? [successor] : []),
            },
            race_track: {
                item: raceTrack,
                node_properties: getNodeProperties(DataNodeType.RACE_TRACK),
                thumbnails: await getRaceTrackThumbnails(raceTrack ? [raceTrack] : []),
            },
            track_layout: {
                item: trackLayout,
                node_properties: getNodeProperties(DataNodeType.TRACK_LAYOUT),
                thumbnails: await getTrackLayoutThumbnails(trackLayout ? [trackLayout] : []),
            },
            racing_sessions: {
                items: racingSessions,
                node_properties: getNodeProperties(DataNodeType.RACING_SESSION),
                thumbnails: await getRacingSessionThumbnails(racingSessions),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
