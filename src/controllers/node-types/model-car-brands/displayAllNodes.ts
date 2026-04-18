import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {ModelCarBrandModelFacade} from "../../../models/ModelCarBrandModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const modelCarBrands = await ModelCarBrandModelFacade.getAllNodes({page})

    res.render('templates/node-types/model-car-brands/model-car-brand-overview-page', {
        page_title: 'All Model Car Brands',
        main_headline: 'All Model Car Brands',
        node_type: ControllerNodeType.MODEL_CAR_BRAND,
        node_collection: modelCarBrands,
        thumbnails: await getNodeThumbnails(modelCarBrands),
        node_properties: getNodeProperties(ControllerNodeType.MODEL_CAR_BRAND),
        pagination: {
            page,
            total: await ModelCarBrandModelFacade.getTotalNodeCount(),
        },
    })
}
