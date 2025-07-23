import express from "express"
import {Brand} from "../../models/Brand.ts"

export async function displayNode(req: express.Request, res: express.Response) {
    const brandId = parseInt(req.params.id)
    const brand = await Brand.findById(brandId)
    const connectedCarModels = await Brand.findConnectedCarModels(brandId)
    const connectedImages = await Brand.findConnectedImages(brandId)

    if (!brand) {
        return res.render('templates/brands/brand-not-found-page', {
            pageTitle: `Brand not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    return res.render('templates/brands/brand-page', {
        pageTitle: `${brand.name} - Brand`,
        brand,
        carModels: connectedCarModels,
        images: connectedImages,
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
