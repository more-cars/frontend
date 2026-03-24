import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {RaceTrackModelFacade} from "../../../models/RaceTrackModelFacade"
import {getRaceTrackThumbnails} from "./getRaceTrackThumbnails"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getAllNodeTitles} from "../../lib/getAllNodeTitles"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const raceTracks = await RaceTrackModelFacade.getAllNodes({page})

    res.render('templates/node-types/race-tracks/race-track-overview-page', {
        page_title: 'All Race Tracks',
        main_headline: 'All Race Tracks',
        node_collection: raceTracks,
        node_titles: getAllNodeTitles(raceTracks, RaceTrackModelFacade.getNodeTitle),
        thumbnails: await getRaceTrackThumbnails(raceTracks),
        node_properties: getNodeProperties(DataNodeType.RACE_TRACK),
        pagination: {
            page,
            total: await RaceTrackModelFacade.getTotalNodeCount(),
        },
    })
}
