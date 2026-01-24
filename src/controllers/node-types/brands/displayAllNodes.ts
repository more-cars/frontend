import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {BrandModelFacade} from "../../../models/BrandModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getBrandThumbnails} from "./getBrandThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const brands = await BrandModelFacade.getAllNodes({page})

    return res.render('templates/brands/brands-page', {
        pageTitle: 'All Brands',
        nodeCollection: brands,
        node_properties: getNodeProperties(DataNodeType.BRAND),
        thumbnails: await getBrandThumbnails(brands),
        pagination: {
            page,
            total: 293,
        },
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
