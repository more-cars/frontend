import express from "express"
import {SessionResultModelFacade} from "../../../models/SessionResultModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const sessionResultId = parseInt(req.params.id)
    const sessionResult = await SessionResultModelFacade.getNodeById(sessionResultId)

    if (!sessionResult) {
        return res.render('templates/node-types/session-results/session-result-not-found-page', {
            page_title: `Session Result not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    res.render('templates/node-types/session-results/session-result-detail-page', {
        page_title: `${sessionResult.driver_name} - Session Result`,
        main_headline: `${sessionResult.driver_name}`,
        node: {
            data: sessionResult,
            node_properties: getNodeProperties(DataNodeType.SESSION_RESULT),
            main_image: await SessionResultModelFacade.getConnectedMainImage(sessionResultId),
        },
        relationships: {},
    })
}
