import express from "express"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {MotorShowModelFacade} from "../../../models/MotorShowModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"
import {sendResponse400} from "../../responses/sendResponse400"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    let searchParams
    try {
        searchParams = determineSearchParams(req, ControllerNodeType.MOTOR_SHOW)
    } catch (error) {
        console.error(error)
        return sendResponse400(res)
    }

    const motorShows = await MotorShowModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/motor-shows/motor-show-overview-page', {
        page_title: 'All Motor Shows',
        main_headline: 'All Motor Shows',
        node_type: ControllerNodeType.MOTOR_SHOW,
        node_collection: motorShows,
        thumbnails: await getNodeThumbnails(motorShows),
        node_properties: getNodeProperties(ControllerNodeType.MOTOR_SHOW),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await MotorShowModelFacade.getTotalNodeCount(),
        },
    })
}
