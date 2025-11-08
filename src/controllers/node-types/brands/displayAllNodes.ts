import express from "express"
import {BrandModelFacade} from "../../../models/BrandModelFacade"
import {getPrimaryProperties} from "../../../models/node-types/getPrimaryProperties"
import {BrandNode} from "../../../data/node-types/brands/types/BrandNode"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const brands = await BrandModelFacade.getAllNodes()

    return res.render('templates/brands/brands-page', {
        pageTitle: 'All Brands',
        nodeCollection: brands,
        primaryProperties: getPrimaryProperties(),
        thumbnails: await getThumbnails(brands),
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}

async function getThumbnails(brands: BrandNode[]) {
    const thumbnails = []

    for (const brand of brands) {
        const thumbnail = await BrandModelFacade.getConnectedMainImage(brand.id)
        thumbnails[brand.id] = thumbnail || null
    }

    return thumbnails
}
