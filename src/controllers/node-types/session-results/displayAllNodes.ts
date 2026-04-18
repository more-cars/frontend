import express from "express"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {SessionResultModelFacade} from "../../../models/SessionResultModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const searchParams = determineSearchParams(req)
    const sessionResults = await SessionResultModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/session-results/session-result-overview-page', {
        page_title: 'All Session Results',
        main_headline: 'All Session Results',
        node_type: ControllerNodeType.SESSION_RESULT,
        node_collection: sessionResults,
        thumbnails: await getNodeThumbnails(sessionResults),
        node_properties: getNodeProperties(ControllerNodeType.SESSION_RESULT),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await SessionResultModelFacade.getTotalNodeCount(),
        },
    })
}
