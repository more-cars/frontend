import express from "express"
import {Image} from "../../models/Image.ts"

export async function displayNode(req: express.Request, res: express.Response) {
    const imageId = parseInt(req.params.id)
    const image = await Image.findById(imageId)
    const connectedBrands = await Image.findConnectedBrands(imageId)
    const connectedCarModels = await Image.findConnectedCarModels(imageId)

    if (!image) {
        return res.render('templates/images/image-not-found-page', {
            pageTitle: `Image not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    res.render('templates/images/image-page', {
        pageTitle: `${image.name} - Image`,
        node: image,
        brands: connectedBrands,
        carModels: connectedCarModels,
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
