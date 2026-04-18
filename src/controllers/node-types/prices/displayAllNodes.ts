import express from "express"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {PriceModelFacade} from "../../../models/PriceModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const searchParams = determineSearchParams(req)
    const prices = await PriceModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/prices/price-overview-page', {
        page_title: 'All Prices',
        main_headline: 'All Prices',
        node_type: ControllerNodeType.PRICE,
        node_collection: prices,
        thumbnails: await getNodeThumbnails(prices),
        node_properties: getNodeProperties(ControllerNodeType.PRICE),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await PriceModelFacade.getTotalNodeCount(),
        },
    })
}
