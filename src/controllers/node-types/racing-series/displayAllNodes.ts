import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {RacingSeriesModelFacade} from "../../../models/RacingSeriesModelFacade"
import {getAllNodeTitles} from "../../lib/getAllNodeTitles"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const racingSeries = await RacingSeriesModelFacade.getAllNodes({page})

    res.render('templates/node-types/racing-series/racing-series-overview-page', {
        page_title: 'All Racing Series',
        main_headline: 'All Racing Series',
        node_type: ControllerNodeType.RACING_SERIES,
        node_collection: racingSeries,
        node_titles: getAllNodeTitles(racingSeries, RacingSeriesModelFacade.getNodeTitle),
        thumbnails: await getNodeThumbnails(racingSeries),
        node_properties: getNodeProperties(DataNodeType.RACING_SERIES),
        pagination: {
            page,
            total: await RacingSeriesModelFacade.getTotalNodeCount(),
        },
    })
}
