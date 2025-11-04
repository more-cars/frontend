import express from "express"
import {ImageModelFacade} from "../../models/ImageModelFacade"

export async function displayNode(req: express.Request, res: express.Response) {
    const imageId = parseInt(req.params.id)
    const image = await ImageModelFacade.getNodeById(imageId)

    if (!image) {
        return res.render('templates/images/image-not-found-page', {
            pageTitle: `Image not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const connectedBrands = await ImageModelFacade.getConnectedBrands(imageId)
    const connectedCarModels = await ImageModelFacade.getConnectedCarModels(imageId)

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
