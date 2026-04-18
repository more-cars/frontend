import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {ModelCarModelFacade} from "../../../models/ModelCarModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const modelCars = await ModelCarModelFacade.getAllNodes({page})

    res.render('templates/node-types/model-cars/model-car-overview-page', {
        page_title: 'All Model Cars',
        main_headline: 'All Model Cars',
        node_type: ControllerNodeType.MODEL_CAR,
        node_collection: modelCars,
        thumbnails: await getNodeThumbnails(modelCars),
        node_properties: getNodeProperties(ControllerNodeType.MODEL_CAR),
        pagination: {
            page,
            total: await ModelCarModelFacade.getTotalNodeCount(),
        },
    })
}
