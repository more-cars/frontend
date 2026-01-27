import express from "express"
import {RaceTrackModelFacade} from "../../../models/RaceTrackModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const raceTrackId = parseInt(req.params.id)
    const raceTrack = await RaceTrackModelFacade.getNodeById(raceTrackId)

    if (!raceTrack) {
        return res.render('templates/race-tracks/race-track-not-found-page', {
            pageTitle: `Race Track not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    return res.render('templates/race-tracks/race-track-page', {
        pageTitle: `${raceTrack.name} - Race Track`,
        node: {
            data: raceTrack,
            node_properties: getNodeProperties(DataNodeType.RACE_TRACK),
        },
        relationships: {
        },
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
