import express from "express"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {ProgrammeModelFacade} from "../../../models/ProgrammeModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const searchParams = determineSearchParams(req)
    const programmes = await ProgrammeModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/programmes/programme-overview-page', {
        page_title: 'All Programmes',
        main_headline: 'All Programmes',
        node_type: ControllerNodeType.PROGRAMME,
        node_collection: programmes,
        thumbnails: await getNodeThumbnails(programmes),
        node_properties: getNodeProperties(ControllerNodeType.PROGRAMME),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await ProgrammeModelFacade.getTotalNodeCount(),
        },
    })
}
