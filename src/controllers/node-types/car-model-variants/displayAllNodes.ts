import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {CarModelVariantModelFacade} from "../../../models/CarModelVariantModelFacade"
import {getAllNodeTitles} from "../../lib/getAllNodeTitles"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const carModelVariants = await CarModelVariantModelFacade.getAllNodes({page})

    res.render('templates/node-types/car-model-variants/car-model-variant-overview-page', {
        page_title: 'All Car Model Variants',
        main_headline: 'All Car Model Variants',
        node_type: ControllerNodeType.CAR_MODEL_VARIANT,
        node_collection: carModelVariants,
        node_titles: getAllNodeTitles(carModelVariants, CarModelVariantModelFacade.getNodeTitle),
        thumbnails: await getNodeThumbnails(carModelVariants),
        node_properties: getNodeProperties(DataNodeType.CAR_MODEL_VARIANT),
        pagination: {
            page,
            total: await CarModelVariantModelFacade.getTotalNodeCount(),
        },
    })
}
