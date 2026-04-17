import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {BrandModelFacade} from "../../../models/BrandModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const brands = await BrandModelFacade.getAllNodes({page})

    res.render('templates/node-types/brands/brand-overview-page', {
        page_title: 'All Brands',
        main_headline: 'All Brands',
        node_type: ControllerNodeType.BRAND,
        node_collection: brands,
        thumbnails: await getNodeThumbnails(brands),
        node_properties: getNodeProperties(DataNodeType.BRAND),
        pagination: {
            page,
            total: await BrandModelFacade.getTotalNodeCount(),
        },
    })
}
