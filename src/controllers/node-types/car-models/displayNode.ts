import express from "express"
import {CarModelModelFacade} from "../../../models/CarModelModelFacade"
import {getPrimaryProperties} from "../../../models/node-types/getPrimaryProperties"

export async function displayNode(req: express.Request, res: express.Response) {
    const carModelId = parseInt(req.params.id)
    const carModel = await CarModelModelFacade.getNodeById(carModelId)

    if (!carModel) {
        return res.render('templates/car-models/car-model-not-found-page', {
            pageTitle: `Car Model not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const connectedBrand = await CarModelModelFacade.getConnectedBrand(carModelId)
    const connectedPredecessor = await CarModelModelFacade.getConnectedPredecessor(carModelId)
    const connectedSuccessor = await CarModelModelFacade.getConnectedSuccessor(carModelId)
    const connectedImages = await CarModelModelFacade.getConnectedImages(carModelId)
    const connectedMainImage = await CarModelModelFacade.getConnectedMainImage(carModelId)

    res.render('templates/car-models/car-model-page', {
        pageTitle: `${carModel.name} - Car Model`,
        node: carModel,
        brand: connectedBrand,
        predecessor: connectedPredecessor,
        successor: connectedSuccessor,
        images: connectedImages,
        mainImage: connectedMainImage,
        primaryProperties: getPrimaryProperties(),
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
