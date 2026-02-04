import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {SessionResultModelFacade} from "../../../models/SessionResultModelFacade"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const sessionResults = await SessionResultModelFacade.getAllNodes({page})

    res.render('templates/node-types/session-results/session-result-overview-page', {
        page_title: 'All Session Results',
        main_headline: 'All Session Results',
        node_collection: sessionResults,
        node_properties: getNodeProperties(DataNodeType.SESSION_RESULT),
        pagination: {
            page,
            total: await SessionResultModelFacade.getTotalNodeCount(),
        },
    })
}
