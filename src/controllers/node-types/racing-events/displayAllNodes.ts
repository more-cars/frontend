import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {RacingEventModelFacade} from "../../../models/RacingEventModelFacade"
import {getRacingEventThumbnails} from "./getRacingEventThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const racingEvents = await RacingEventModelFacade.getAllNodes({page})

    res.render('templates/node-types/racing-events/racing-event-overview-page', {
        page_title: 'All Racing Events',
        main_headline: 'All Racing Events',
        node_collection: racingEvents,
        thumbnails: await getRacingEventThumbnails(racingEvents),
        node_properties: getNodeProperties(DataNodeType.RACING_EVENT),
        pagination: {
            page,
            total: await RacingEventModelFacade.getTotalNodeCount(),
        },
    })
}
