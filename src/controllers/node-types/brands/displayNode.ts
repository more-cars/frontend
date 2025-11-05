import express from "express"
import {BrandModelFacade} from "../../../models/BrandModelFacade"

export async function displayNode(req: express.Request, res: express.Response) {
    const brandId = parseInt(req.params.id)
    const brand = await BrandModelFacade.getNodeById(brandId)

    if (!brand) {
        return res.render('templates/brands/brand-not-found-page', {
            pageTitle: `Brand not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const connectedCarModels = await BrandModelFacade.getConnectedCarModels(brandId)
    const connectedImages = await BrandModelFacade.getConnectedImages(brandId)

    return res.render('templates/brands/brand-page', {
        pageTitle: `${brand.name} - Brand`,
        node: brand,
        carModels: connectedCarModels,
        images: connectedImages,
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
