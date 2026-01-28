import express from "express"
import {RaceTrackModelFacade} from "../../../models/RaceTrackModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

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

    res.render('templates/node-types/race-tracks/race-track-page', {
        page_title: `${raceTrack.name} - Race Track`,
        node: {
            data: raceTrack,
            node_properties: getNodeProperties(DataNodeType.RACE_TRACK),
            main_image: await RaceTrackModelFacade.getConnectedMainImage(raceTrackId),
        },
        relationships: {
            images: {
                items: await RaceTrackModelFacade.getConnectedImages(raceTrackId),
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
