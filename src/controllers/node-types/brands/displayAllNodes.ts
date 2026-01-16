import express from "express"
import {BrandModelFacade} from "../../../models/BrandModelFacade"
import {getPrimaryProperties} from "../../../models/node-types/getPrimaryProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {Brand} from "../../../models/node-types/brands/types/Brand"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = parseInt(req.query.page as string) || 1
    const brands = await BrandModelFacade.getAllNodes({page})

    return res.render('templates/brands/brands-page', {
        pageTitle: 'All Brands',
        nodeCollection: brands,
        primaryProperties: getPrimaryProperties(DataNodeType.BRAND),
        thumbnails: await getThumbnails(brands),
        pagination: {
            page,
        },
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}

async function getThumbnails(brands: Brand[]) {
    const thumbnails = []

    for (const brand of brands) {
        const thumbnail = await BrandModelFacade.getConnectedMainImage(brand.id)
        thumbnails[brand.id] = thumbnail || null
    }

    return thumbnails
}
