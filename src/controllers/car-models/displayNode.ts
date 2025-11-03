import express from "express"
import {CarModel} from "../../models/CarModel.ts"

export async function displayNode(req: express.Request, res: express.Response) {
    const carModelId = parseInt(req.params.id)
    const carModel = await CarModel.findById(carModelId)

    if (!carModel) {
        return res.render('templates/car-models/car-model-not-found-page', {
            pageTitle: `Car Model not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const connectedBrand = await CarModel.findConnectedBrand(carModelId)
    const connectedImages = await CarModel.findConnectedImages(carModelId)

    res.render('templates/car-models/car-model-page', {
        pageTitle: `${carModel.data.name} - Car Model`,
        node: carModel,
        brand: connectedBrand,
        images: connectedImages,
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
