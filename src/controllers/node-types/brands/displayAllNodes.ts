import express from "express"
import {BrandModelFacade} from "../../../models/BrandModelFacade"
import {getPrimaryProperties} from "../../../models/node-types/getPrimaryProperties"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const brands = await BrandModelFacade.getAllNodes()

    return res.render('templates/brands/brands-page', {
        pageTitle: 'All Brands',
        nodeCollection: brands,
        primaryProperties: getPrimaryProperties(),
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
