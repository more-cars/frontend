import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {RacingSessionModelFacade} from "../../../models/RacingSessionModelFacade"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const racingSessions = await RacingSessionModelFacade.getAllNodes({page})

    res.render('templates/node-types/racing-sessions/racing-session-overview-page', {
        page_title: 'All Racing Sessions',
        main_headline: 'All Racing Sessions',
        node_collection: racingSessions,
        node_properties: getNodeProperties(DataNodeType.RACING_SESSION),
        pagination: {
            page,
            total: await RacingSessionModelFacade.getTotalNodeCount(),
        },
    })
}
