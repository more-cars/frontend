import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {LapTimeModelFacade} from "../../../models/LapTimeModelFacade"
import {getLapTimeThumbnails} from "./getLapTimeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const lapTimes = await LapTimeModelFacade.getAllNodes({page})

    res.render('templates/node-types/lap-times/lap-time-overview-page', {
        page_title: 'All Lap Times',
        main_headline: 'All Lap Times',
        node_collection: lapTimes,
        thumbnails: await getLapTimeThumbnails(lapTimes),
        node_properties: getNodeProperties(DataNodeType.LAP_TIME),
        pagination: {
            page,
            total: await LapTimeModelFacade.getTotalNodeCount(),
        },
    })
}
