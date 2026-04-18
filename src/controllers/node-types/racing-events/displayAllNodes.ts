import express from "express"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {RacingEventModelFacade} from "../../../models/RacingEventModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const searchParams = determineSearchParams(req)
    const racingEvents = await RacingEventModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/racing-events/racing-event-overview-page', {
        page_title: 'All Racing Events',
        main_headline: 'All Racing Events',
        node_type: ControllerNodeType.RACING_EVENT,
        node_collection: racingEvents,
        thumbnails: await getNodeThumbnails(racingEvents),
        node_properties: getNodeProperties(ControllerNodeType.RACING_EVENT),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await RacingEventModelFacade.getTotalNodeCount(),
        },
    })
}
