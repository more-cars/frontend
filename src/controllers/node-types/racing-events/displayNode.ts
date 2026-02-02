import express from "express"
import {RacingEventModelFacade} from "../../../models/RacingEventModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const racingEventId = parseInt(req.params.id)
    const racingEvent = await RacingEventModelFacade.getNodeById(racingEventId)

    if (!racingEvent) {
        return res.render('templates/node-types/racing-events/racing-event-not-found-page', {
            page_title: `Racing Event not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    res.render('templates/node-types/racing-events/racing-event-detail-page', {
        page_title: `${racingEvent.name} - Racing Event`,
        node: {
            data: racingEvent,
            node_properties: getNodeProperties(DataNodeType.RACING_EVENT),
            main_image: await RacingEventModelFacade.getConnectedMainImage(racingEventId),
        },
        relationships: {
        },
    })
}
