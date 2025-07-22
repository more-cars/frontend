import express from "express"
import {Image} from "../../models/Image.ts"

export async function displayNode(req: express.Request, res: express.Response) {
    const imageId = parseInt(req.params.id)
    const image = await Image.findById(imageId)
    const connectedBrands = await Image.findConnectedBrands(imageId)
    const connectedCarModels = await Image.findConnectedCarModels(imageId)

    if (!image) {
        res.statusCode = 404
        return res.render('templates/images/image-not-found-page', {
            pageTitle: `Image not found`
        })
    }

    res.render('templates/images/image-page', {
        pageTitle: `${image.name} - Image`,
        image,
        brands: connectedBrands,
        carModels: connectedCarModels,
    })
}
