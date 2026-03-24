import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {BrandModelFacade} from "../../../models/BrandModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getAllNodeTitles} from "../../lib/getAllNodeTitles"
import {getBrandThumbnails} from "./getBrandThumbnails"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const brands = await BrandModelFacade.getAllNodes({page})

    res.render('templates/node-types/brands/brand-overview-page', {
        page_title: 'All Brands',
        main_headline: 'All Brands',
        node_type: ControllerNodeType.BRAND,
        node_collection: brands,
        node_titles: getAllNodeTitles(brands, BrandModelFacade.getNodeTitle),
        thumbnails: await getBrandThumbnails(brands),
        node_properties: getNodeProperties(DataNodeType.BRAND),
        pagination: {
            page,
            total: await BrandModelFacade.getTotalNodeCount(),
        },
    })
}
