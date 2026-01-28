import express from "express"
import {CarModelModelFacade} from "../../../models/CarModelModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getBrandThumbnails} from "../brands/getBrandThumbnails"
import {getCarModelThumbnails} from "./getCarModelThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const carModelId = parseInt(req.params.id)
    const carModel = await CarModelModelFacade.getNodeById(carModelId)

    if (!carModel) {
        return res.render('templates/node-types/car-models/car-model-not-found-page', {
            pageTitle: `Car Model not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const brand = await CarModelModelFacade.getConnectedBrand(carModelId)
    const predecessor = await CarModelModelFacade.getConnectedPredecessor(carModelId)
    const successor = await CarModelModelFacade.getConnectedSuccessor(carModelId)

    res.render('templates/node-types/car-models/car-model-page', {
        pageTitle: `${carModel.name} - Car Model`,
        node: {
            data: carModel,
            node_properties: getNodeProperties(DataNodeType.CAR_MODEL),
            main_image: await CarModelModelFacade.getConnectedMainImage(carModelId),
        },
        relationships: {
            brand: {
                item: brand,
                node_properties: getNodeProperties(DataNodeType.BRAND),
                thumbnails: await getBrandThumbnails(brand ? [brand] : []),
            },
            predecessor: {
                item: predecessor,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL),
                thumbnails: await getCarModelThumbnails(predecessor ? [predecessor] : []),
            },
            successor: {
                item: successor,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL),
                thumbnails: await getCarModelThumbnails(successor ? [successor] : []),
            },
            images: {
                items: await CarModelModelFacade.getConnectedImages(carModelId),
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
