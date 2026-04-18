import express from "express"
import {determineSearchParams} from "../../lib/determineSearchParams"
import {BrandModelFacade} from "../../../models/BrandModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getNodeProperties} from "../../../specification/getNodeProperties"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const searchParams = determineSearchParams(req)
    const brands = await BrandModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/brands/brand-overview-page', {
        page_title: 'All Brands',
        main_headline: 'All Brands',
        node_type: ControllerNodeType.BRAND,
        node_collection: brands,
        thumbnails: await getNodeThumbnails(brands),
        node_properties: getNodeProperties(ControllerNodeType.BRAND),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await BrandModelFacade.getTotalNodeCount(),
        },
    })
}
