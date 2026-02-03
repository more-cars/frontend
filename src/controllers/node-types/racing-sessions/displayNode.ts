import express from "express"
import {RacingSessionModelFacade} from "../../../models/RacingSessionModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const racingSessionId = parseInt(req.params.id)
    const racingSession = await RacingSessionModelFacade.getNodeById(racingSessionId)

    if (!racingSession) {
        return res.render('templates/node-types/racing-sessions/racing-session-not-found-page', {
            page_title: `Racing Session not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    res.render('templates/node-types/racing-sessions/racing-session-detail-page', {
        page_title: `${racingSession.name} - Racing Session`,
        node: {
            data: racingSession,
            node_properties: getNodeProperties(DataNodeType.RACING_SESSION),
        },
        relationships: {
        },
    })
}
