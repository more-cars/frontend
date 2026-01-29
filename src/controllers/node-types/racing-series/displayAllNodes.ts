import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {RacingSeriesModelFacade} from "../../../models/RacingSeriesModelFacade"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const racingSeries = await RacingSeriesModelFacade.getAllNodes({page})

    res.render('templates/node-types/racing-series/racing-series-overview-page', {
        page_title: 'All Racing Series',
        page_headline: 'All Racing Series',
        node_collection: racingSeries,
        node_properties: getNodeProperties(DataNodeType.RACING_SERIES),
        pagination: {
            page,
            total: await RacingSeriesModelFacade.getTotalNodeCount(),
        },
    })
}
