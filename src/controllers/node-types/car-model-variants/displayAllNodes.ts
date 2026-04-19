import express from "express"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {CarModelVariantModelFacade} from "../../../models/CarModelVariantModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"
import {sendResponse400} from "../../responses/sendResponse400"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    let searchParams
    try {
        searchParams = determineSearchParams(req, ControllerNodeType.CAR_MODEL_VARIANT)
    } catch (error) {
        console.error(error)
        return sendResponse400(res)
    }

    const carModelVariants = await CarModelVariantModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/car-model-variants/car-model-variant-overview-page', {
        page_title: 'All Car Model Variants',
        main_headline: 'All Car Model Variants',
        node_type: ControllerNodeType.CAR_MODEL_VARIANT,
        node_collection: carModelVariants,
        thumbnails: await getNodeThumbnails(carModelVariants),
        node_properties: getNodeProperties(ControllerNodeType.CAR_MODEL_VARIANT),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await CarModelVariantModelFacade.getTotalNodeCount(),
        },
    })
}
