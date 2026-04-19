import express from "express"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {ModelCarBrandModelFacade} from "../../../models/ModelCarBrandModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"
import {sendResponse400} from "../../responses/sendResponse400"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    let searchParams
    try {
        searchParams = determineSearchParams(req, ControllerNodeType.MODEL_CAR_BRAND)
    } catch (error) {
        console.error(error)
        return sendResponse400(res)
    }

    const modelCarBrands = await ModelCarBrandModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/model-car-brands/model-car-brand-overview-page', {
        page_title: 'All Model Car Brands',
        main_headline: 'All Model Car Brands',
        node_type: ControllerNodeType.MODEL_CAR_BRAND,
        node_collection: modelCarBrands,
        thumbnails: await getNodeThumbnails(modelCarBrands),
        node_properties: getNodeProperties(ControllerNodeType.MODEL_CAR_BRAND),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await ModelCarBrandModelFacade.getTotalNodeCount(),
        },
    })
}
