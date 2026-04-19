import express from "express"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {PriceModelFacade} from "../../../models/PriceModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"
import {sendResponse400} from "../../responses/sendResponse400"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    let searchParams
    try {
        searchParams = determineSearchParams(req, ControllerNodeType.PRICE)
    } catch (error) {
        console.error(error)
        return sendResponse400(res)
    }

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
