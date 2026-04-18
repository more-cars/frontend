import express from "express"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {RacingSeriesModelFacade} from "../../../models/RacingSeriesModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const searchParams = determineSearchParams(req)
    const racingSeries = await RacingSeriesModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/racing-series/racing-series-overview-page', {
        page_title: 'All Racing Series',
        main_headline: 'All Racing Series',
        node_type: ControllerNodeType.RACING_SERIES,
        node_collection: racingSeries,
        thumbnails: await getNodeThumbnails(racingSeries),
        node_properties: getNodeProperties(ControllerNodeType.RACING_SERIES),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await RacingSeriesModelFacade.getTotalNodeCount(),
        },
    })
}
