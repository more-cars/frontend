import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {MotorShowModelFacade} from "../../../models/MotorShowModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const motorShows = await MotorShowModelFacade.getAllNodes({page})

    res.render('templates/node-types/motor-shows/motor-show-overview-page', {
        page_title: 'All Motor Shows',
        main_headline: 'All Motor Shows',
        node_type: ControllerNodeType.MOTOR_SHOW,
        node_collection: motorShows,
        thumbnails: await getNodeThumbnails(motorShows),
        node_properties: getNodeProperties(ControllerNodeType.MOTOR_SHOW),
        pagination: {
            page,
            total: await MotorShowModelFacade.getTotalNodeCount(),
        },
    })
}
