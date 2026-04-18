import express from "express"
import {LapTimeModelFacade} from "../../../models/LapTimeModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const searchParams = determineSearchParams(req)
    const lapTimes = await LapTimeModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/lap-times/lap-time-overview-page', {
        page_title: 'All Lap Times',
        main_headline: 'All Lap Times',
        node_type: ControllerNodeType.LAP_TIME,
        node_collection: lapTimes,
        thumbnails: await getNodeThumbnails(lapTimes),
        node_properties: getNodeProperties(ControllerNodeType.LAP_TIME),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await LapTimeModelFacade.getTotalNodeCount(),
        },
    })
}
