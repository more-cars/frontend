import express from "express"
import {CarModel} from "../../models/CarModel.ts"

export async function displayNode(req: express.Request, res: express.Response) {
    const carModelId = parseInt(req.params.id)
    const carModel = await CarModel.findById(carModelId)
    const connectedBrand = await CarModel.findConnectedBrand(carModelId)
    const connectedImages = await CarModel.findConnectedImages(carModelId)

    if (!carModel) {
        return res.render('templates/car-models/car-model-not-found-page', {
            pageTitle: `Car Model not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    res.render('templates/car-models/car-model-page', {
        pageTitle: `${carModel.name} - Car Model`,
        carModel,
        brand: connectedBrand,
        images: connectedImages,
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
