import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {LapTimeModelFacade} from "../../../models/LapTimeModelFacade"
import {getAllNodeTitles} from "../../lib/getAllNodeTitles"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const lapTimes = await LapTimeModelFacade.getAllNodes({page})

    res.render('templates/node-types/lap-times/lap-time-overview-page', {
        page_title: 'All Lap Times',
        main_headline: 'All Lap Times',
        node_type: ControllerNodeType.LAP_TIME,
        node_collection: lapTimes,
        node_titles: getAllNodeTitles(lapTimes, LapTimeModelFacade.getNodeTitle),
        thumbnails: await getNodeThumbnails(lapTimes),
        node_properties: getNodeProperties(DataNodeType.LAP_TIME),
        pagination: {
            page,
            total: await LapTimeModelFacade.getTotalNodeCount(),
        },
    })
}
