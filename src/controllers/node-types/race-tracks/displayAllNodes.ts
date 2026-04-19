import express from "express"
import {determineSearchParams} from "../../lib/determineSearchParams"
import {sendResponse400} from "../../responses/sendResponse400"
import {RaceTrackModelFacade} from "../../../models/RaceTrackModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getNodeProperties} from "../../../specification/getNodeProperties"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    let searchParams
    try {
        searchParams = determineSearchParams(req, ControllerNodeType.RACE_TRACK)
    } catch (error) {
        console.error(error)
        return sendResponse400(res)
    }

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
