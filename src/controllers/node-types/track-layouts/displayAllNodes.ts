import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {TrackLayoutModelFacade} from "../../../models/TrackLayoutModelFacade"
import {getAllNodeTitles} from "../../lib/getAllNodeTitles"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const trackLayouts = await TrackLayoutModelFacade.getAllNodes({page})

    res.render('templates/node-types/track-layouts/track-layout-overview-page', {
        page_title: 'All Track Layouts',
        main_headline: 'All Track Layouts',
        node_type: ControllerNodeType.TRACK_LAYOUT,
        node_collection: trackLayouts,
        node_titles: getAllNodeTitles(trackLayouts, TrackLayoutModelFacade.getNodeTitle),
        thumbnails: await getNodeThumbnails(trackLayouts),
        node_properties: getNodeProperties(DataNodeType.TRACK_LAYOUT),
        pagination: {
            page,
            total: await TrackLayoutModelFacade.getTotalNodeCount(),
        },
    })
}
