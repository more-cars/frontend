import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {ProgrammeModelFacade} from "../../../models/ProgrammeModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const programmes = await ProgrammeModelFacade.getAllNodes({page})

    res.render('templates/node-types/programmes/programme-overview-page', {
        page_title: 'All Programmes',
        main_headline: 'All Programmes',
        node_type: ControllerNodeType.PROGRAMME,
        node_collection: programmes,
        thumbnails: await getNodeThumbnails(programmes),
        node_properties: getNodeProperties(DataNodeType.PROGRAMME),
        pagination: {
            page,
            total: await ProgrammeModelFacade.getTotalNodeCount(),
        },
    })
}
