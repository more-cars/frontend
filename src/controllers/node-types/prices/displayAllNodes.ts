import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {PriceModelFacade} from "../../../models/PriceModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const prices = await PriceModelFacade.getAllNodes({page})

    res.render('templates/node-types/prices/price-overview-page', {
        page_title: 'All Prices',
        main_headline: 'All Prices',
        node_type: ControllerNodeType.PRICE,
        node_collection: prices,
        thumbnails: await getNodeThumbnails(prices),
        node_properties: getNodeProperties(DataNodeType.PRICE),
        pagination: {
            page,
            total: await PriceModelFacade.getTotalNodeCount(),
        },
    })
}
