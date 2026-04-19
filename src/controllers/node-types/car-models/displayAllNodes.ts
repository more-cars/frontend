import express from "express"
import {determineSearchParams} from "../../lib/determineSearchParams"
import {CarModelModelFacade} from "../../../models/CarModelModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {sendResponse400} from "../../responses/sendResponse400"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    let searchParams
    try {
        searchParams = determineSearchParams(req, ControllerNodeType.CAR_MODEL)
    } catch (error) {
        console.error(error)
        return sendResponse400(res)
    }

    const carModels = await CarModelModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/car-models/car-model-overview-page', {
        page_title: 'All Car Models',
        main_headline: 'All Car Models',
        node_type: ControllerNodeType.CAR_MODEL,
        node_collection: carModels,
        thumbnails: await getNodeThumbnails(carModels),
        node_properties: getNodeProperties(ControllerNodeType.CAR_MODEL),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await CarModelModelFacade.getTotalNodeCount(),
        },
    })
}
