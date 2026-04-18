import express from "express"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {TrackLayoutModelFacade} from "../../../models/TrackLayoutModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const searchParams = determineSearchParams(req)
    const trackLayouts = await TrackLayoutModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/track-layouts/track-layout-overview-page', {
        page_title: 'All Track Layouts',
        main_headline: 'All Track Layouts',
        node_type: ControllerNodeType.TRACK_LAYOUT,
        node_collection: trackLayouts,
        thumbnails: await getNodeThumbnails(trackLayouts),
        node_properties: getNodeProperties(ControllerNodeType.TRACK_LAYOUT),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await TrackLayoutModelFacade.getTotalNodeCount(),
        },
    })
}
