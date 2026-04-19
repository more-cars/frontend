import express from "express"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {ModelCarModelFacade} from "../../../models/ModelCarModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"
import {sendResponse400} from "../../responses/sendResponse400"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    let searchParams
    try {
        searchParams = determineSearchParams(req, ControllerNodeType.MODEL_CAR)
    } catch (error) {
        console.error(error)
        return sendResponse400(res)
    }

    const modelCars = await ModelCarModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/model-cars/model-car-overview-page', {
        page_title: 'All Model Cars',
        main_headline: 'All Model Cars',
        node_type: ControllerNodeType.MODEL_CAR,
        node_collection: modelCars,
        thumbnails: await getNodeThumbnails(modelCars),
        node_properties: getNodeProperties(ControllerNodeType.MODEL_CAR),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await ModelCarModelFacade.getTotalNodeCount(),
        },
    })
}
