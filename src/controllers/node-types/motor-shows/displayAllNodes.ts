import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {MotorShowModelFacade} from "../../../models/MotorShowModelFacade"
import {getMotorShowThumbnails} from "./getMotorShowThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const motorShows = await MotorShowModelFacade.getAllNodes({page})

    res.render('templates/node-types/motor-shows/motor-show-overview-page', {
        page_title: 'All Motor Shows',
        main_headline: 'All Motor Shows',
        node_collection: motorShows,
        thumbnails: await getMotorShowThumbnails(motorShows),
        node_properties: getNodeProperties(DataNodeType.MOTOR_SHOW),
        pagination: {
            page,
            total: await MotorShowModelFacade.getTotalNodeCount(),
        },
    })
}
