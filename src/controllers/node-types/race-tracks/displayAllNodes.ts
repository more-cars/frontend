import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {RaceTrackModelFacade} from "../../../models/RaceTrackModelFacade"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const raceTracks = await RaceTrackModelFacade.getAllNodes({page})

    return res.render('templates/race-tracks/race-tracks-page', {
        pageTitle: 'All Race Tracks',
        nodeCollection: raceTracks,
        node_properties: getNodeProperties(DataNodeType.RACE_TRACK),
        pagination: {
            page,
            total: 101,
        },
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
