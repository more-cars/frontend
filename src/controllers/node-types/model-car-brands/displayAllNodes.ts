import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {ModelCarBrandModelFacade} from "../../../models/ModelCarBrandModelFacade"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const modelCarBrands = await ModelCarBrandModelFacade.getAllNodes({page})

    res.render('templates/node-types/model-car-brands/model-car-brand-overview-page', {
        page_title: 'All Model Car Brands',
        main_headline: 'All Model Car Brands',
        node_collection: modelCarBrands,
        node_properties: getNodeProperties(DataNodeType.MODEL_CAR_BRAND),
        pagination: {
            page,
            total: await ModelCarBrandModelFacade.getTotalNodeCount(),
        },
    })
}
