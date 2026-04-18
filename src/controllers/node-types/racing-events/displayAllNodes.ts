import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {RacingEventModelFacade} from "../../../models/RacingEventModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const racingEvents = await RacingEventModelFacade.getAllNodes({page})

    res.render('templates/node-types/racing-events/racing-event-overview-page', {
        page_title: 'All Racing Events',
        main_headline: 'All Racing Events',
        node_type: ControllerNodeType.RACING_EVENT,
        node_collection: racingEvents,
        thumbnails: await getNodeThumbnails(racingEvents),
        node_properties: getNodeProperties(ControllerNodeType.RACING_EVENT),
        pagination: {
            page,
            total: await RacingEventModelFacade.getTotalNodeCount(),
        },
    })
}
