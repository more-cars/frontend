import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {CarModelModelFacade} from "../../../models/CarModelModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const carModels = await CarModelModelFacade.getAllNodes({page})

    res.render('templates/node-types/car-models/car-model-overview-page', {
        page_title: 'All Car Models',
        main_headline: 'All Car Models',
        node_type: ControllerNodeType.CAR_MODEL,
        node_collection: carModels,
        thumbnails: await getNodeThumbnails(carModels),
        node_properties: getNodeProperties(DataNodeType.CAR_MODEL),
        pagination: {
            page,
            total: await CarModelModelFacade.getTotalNodeCount(),
        },
    })
}
