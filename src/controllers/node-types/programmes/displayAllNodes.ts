import express from "express"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {ProgrammeModelFacade} from "../../../models/ProgrammeModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"
import {sendResponse400} from "../../responses/sendResponse400"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    let searchParams
    try {
        searchParams = determineSearchParams(req, ControllerNodeType.PROGRAMME)
    } catch (error) {
        console.error(error)
        return sendResponse400(res)
    }

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
