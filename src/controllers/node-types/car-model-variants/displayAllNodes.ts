import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {CarModelVariantModelFacade} from "../../../models/CarModelVariantModelFacade"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const carModelVariants = await CarModelVariantModelFacade.getAllNodes({page})

    res.render('templates/node-types/car-model-variants/car-model-variant-overview-page', {
        page_title: 'All Car Model Variants',
        main_headline: 'All Car Model Variants',
        node_collection: carModelVariants,
        node_properties: getNodeProperties(DataNodeType.CAR_MODEL_VARIANT),
        pagination: {
            page,
            total: await CarModelVariantModelFacade.getTotalNodeCount(),
        },
    })
}
