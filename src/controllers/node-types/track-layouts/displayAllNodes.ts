import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {TrackLayoutModelFacade} from "../../../models/TrackLayoutModelFacade"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const trackLayouts = await TrackLayoutModelFacade.getAllNodes({page})

    res.render('templates/node-types/track-layouts/track-layout-overview-page', {
        page_title: 'All Track Layouts',
        page_headline: 'All Track Layouts',
        node_collection: trackLayouts,
        node_properties: getNodeProperties(DataNodeType.TRACK_LAYOUT),
        pagination: {
            page,
            total: 101,
        },
    })
}
