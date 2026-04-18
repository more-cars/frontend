import express from "express"
import {RaceTrackModelFacade} from "../../../models/RaceTrackModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const searchParams = determineSearchParams(req)
    const raceTracks = await RaceTrackModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/race-tracks/race-track-overview-page', {
        page_title: 'All Race Tracks',
        main_headline: 'All Race Tracks',
        node_type: ControllerNodeType.RACE_TRACK,
        node_collection: raceTracks,
        thumbnails: await getNodeThumbnails(raceTracks),
        node_properties: getNodeProperties(ControllerNodeType.RACE_TRACK),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await RaceTrackModelFacade.getTotalNodeCount(),
        },
    })
}
