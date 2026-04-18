import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {SessionResultModelFacade} from "../../../models/SessionResultModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const sessionResults = await SessionResultModelFacade.getAllNodes({page})

    res.render('templates/node-types/session-results/session-result-overview-page', {
        page_title: 'All Session Results',
        main_headline: 'All Session Results',
        node_type: ControllerNodeType.SESSION_RESULT,
        node_collection: sessionResults,
        thumbnails: await getNodeThumbnails(sessionResults),
        node_properties: getNodeProperties(ControllerNodeType.SESSION_RESULT),
        pagination: {
            page,
            total: await SessionResultModelFacade.getTotalNodeCount(),
        },
    })
}
