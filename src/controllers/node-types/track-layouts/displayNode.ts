import express from "express"
import {TrackLayoutModelFacade} from "../../../models/TrackLayoutModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getRaceTrackThumbnails} from "../race-tracks/getRaceTrackThumbnails"
import {getRacingEventThumbnails} from "../racing-events/getRacingEventThumbnails"
import {getRacingGameThumbnails} from "../racing-games/getRacingGameThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const trackLayoutId = parseInt(req.params.id)
    const trackLayout = await TrackLayoutModelFacade.getNodeById(trackLayoutId)

    if (!trackLayout) {
        return res.render('templates/node-types/track-layouts/track-layout-not-found-page', {
            page_title: `Track Layout not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const raceTrack = await TrackLayoutModelFacade.getConnectedRaceTrack(trackLayoutId)
    const racingEvents = await TrackLayoutModelFacade.getConnectedRacingEvents(trackLayoutId)
    const racingGames = await TrackLayoutModelFacade.getConnectedRacingGames(trackLayoutId)
    const images = await TrackLayoutModelFacade.getConnectedImages(trackLayoutId)

    res.render('templates/node-types/track-layouts/track-layout-detail-page', {
        page_title: `${trackLayout.name} - Track Layout`,
        node: {
            type: ControllerNodeType.TRACK_LAYOUT,
            data: trackLayout,
            title: TrackLayoutModelFacade.getNodeTitle(trackLayout),
            node_properties: getNodeProperties(DataNodeType.TRACK_LAYOUT),
            main_image: await TrackLayoutModelFacade.getConnectedMainImage(trackLayoutId),
        },
        relationships: {
            race_track: {
                item: raceTrack,
                node_properties: getNodeProperties(DataNodeType.RACE_TRACK),
                thumbnails: await getRaceTrackThumbnails(raceTrack ? [raceTrack] : []),
            },
            racing_events: {
                items: racingEvents,
                node_properties: getNodeProperties(DataNodeType.RACING_EVENT),
                thumbnails: await getRacingEventThumbnails(racingEvents),
            },
            racing_games: {
                items: racingGames,
                node_properties: getNodeProperties(DataNodeType.RACING_GAME),
                thumbnails: await getRacingGameThumbnails(racingGames),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
