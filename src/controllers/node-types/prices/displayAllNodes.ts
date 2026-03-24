import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {PriceModelFacade} from "../../../models/PriceModelFacade"
import {getPriceThumbnails} from "./getPriceThumbnails"
import {getAllNodeTitles} from "../../lib/getAllNodeTitles"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const prices = await PriceModelFacade.getAllNodes({page})

    res.render('templates/node-types/prices/price-overview-page', {
        page_title: 'All Prices',
        main_headline: 'All Prices',
        node_collection: prices,
        node_titles: getAllNodeTitles(prices, PriceModelFacade.getNodeTitle),
        thumbnails: await getPriceThumbnails(prices),
        node_properties: getNodeProperties(DataNodeType.PRICE),
        pagination: {
            page,
            total: await PriceModelFacade.getTotalNodeCount(),
        },
    })
}
