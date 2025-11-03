import express from "express"
import {Brand} from "../../models/Brand"

export async function displayNode(req: express.Request, res: express.Response) {
    const brandId = parseInt(req.params.id)
    const brand = await Brand.findById(brandId)

    if (!brand) {
        return res.render('templates/brands/brand-not-found-page', {
            pageTitle: `Brand not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const connectedCarModels = await Brand.findConnectedCarModels(brandId)
    const connectedImages = await Brand.findConnectedImages(brandId)

    return res.render('templates/brands/brand-page', {
        pageTitle: `${brand.data.name} - Brand`,
        node: brand,
        carModels: connectedCarModels,
        images: connectedImages,
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
