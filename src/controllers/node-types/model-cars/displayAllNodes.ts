import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {ModelCarModelFacade} from "../../../models/ModelCarModelFacade"
import {getModelCarThumbnails} from "./getModelCarThumbnails"
import {getAllNodeTitles} from "../../lib/getAllNodeTitles"
import {ControllerNodeType} from "../../types/ControllerNodeType"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const modelCars = await ModelCarModelFacade.getAllNodes({page})

    res.render('templates/node-types/model-cars/model-car-overview-page', {
        page_title: 'All Model Cars',
        main_headline: 'All Model Cars',
        node_type: ControllerNodeType.MODEL_CAR,
        node_collection: modelCars,
        node_titles: getAllNodeTitles(modelCars, ModelCarModelFacade.getNodeTitle),
        thumbnails: await getModelCarThumbnails(modelCars),
        node_properties: getNodeProperties(DataNodeType.MODEL_CAR),
        pagination: {
            page,
            total: await ModelCarModelFacade.getTotalNodeCount(),
        },
    })
}
