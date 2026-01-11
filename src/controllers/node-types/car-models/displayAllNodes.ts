import express from "express"
import {CarModelModelFacade} from "../../../models/CarModelModelFacade"
import {getPrimaryProperties} from "../../../models/node-types/getPrimaryProperties"
import {CarModel} from "../../../models/node-types/car-models/types/CarModel"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const carModels = await CarModelModelFacade.getAllNodes()

    return res.render('templates/car-models/car-models-page', {
        pageTitle: 'All Car Models',
        nodeCollection: carModels,
        primaryProperties: getPrimaryProperties(),
        thumbnails: await getThumbnails(carModels),
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}

async function getThumbnails(carModels: CarModel[]) {
    const thumbnails = []

    for (const carModel of carModels) {
        const thumbnail = await CarModelModelFacade.getConnectedMainImage(carModel.id)
        thumbnails[carModel.id] = thumbnail || null
    }

    return thumbnails
}
