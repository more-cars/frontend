import express from "express"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {RacingSessionModelFacade} from "../../../models/RacingSessionModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const searchParams = determineSearchParams(req)
    const racingSessions = await RacingSessionModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/racing-sessions/racing-session-overview-page', {
        page_title: 'All Racing Sessions',
        main_headline: 'All Racing Sessions',
        node_type: ControllerNodeType.RACING_SESSION,
        node_collection: racingSessions,
        thumbnails: await getNodeThumbnails(racingSessions),
        node_properties: getNodeProperties(ControllerNodeType.RACING_SESSION),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await RacingSessionModelFacade.getTotalNodeCount(),
        },
    })
}
