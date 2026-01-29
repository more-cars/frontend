import express from "express"
import {RaceTrackModelFacade} from "../../../models/RaceTrackModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getTrackLayoutThumbnails} from "../track-layouts/getTrackLayoutThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const raceTrackId = parseInt(req.params.id)
    const raceTrack = await RaceTrackModelFacade.getNodeById(raceTrackId)

    if (!raceTrack) {
        return res.render('templates/node-types/race-tracks/race-track-not-found-page', {
            page_title: `Race Track not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const trackLayouts = await RaceTrackModelFacade.getConnectedTrackLayouts(raceTrackId)
    const images = await RaceTrackModelFacade.getConnectedImages(raceTrackId)

    res.render('templates/node-types/race-tracks/race-track-detail-page', {
        page_title: `${raceTrack.name} - Race Track`,
        node: {
            data: raceTrack,
            node_properties: getNodeProperties(DataNodeType.RACE_TRACK),
            main_image: await RaceTrackModelFacade.getConnectedMainImage(raceTrackId),
        },
        relationships: {
            track_layouts: {
                items: await RaceTrackModelFacade.getConnectedTrackLayouts(raceTrackId),
                node_properties: getNodeProperties(DataNodeType.TRACK_LAYOUT),
                thumbnails: await getTrackLayoutThumbnails(trackLayouts),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
