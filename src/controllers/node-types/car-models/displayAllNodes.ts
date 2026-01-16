import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {CarModelModelFacade} from "../../../models/CarModelModelFacade"
import {getPrimaryProperties} from "../../../models/node-types/getPrimaryProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {CarModel} from "../../../models/node-types/car-models/types/CarModel"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const carModels = await CarModelModelFacade.getAllNodes({page})

    return res.render('templates/car-models/car-models-page', {
        pageTitle: 'All Car Models',
        nodeCollection: carModels,
        primaryProperties: getPrimaryProperties(DataNodeType.CAR_MODEL),
        thumbnails: await getThumbnails(carModels),
        pagination: {
            page,
        },
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
