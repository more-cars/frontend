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
        return res.render('templates/car-models/car-model-not-found-page', {
            pageTitle: `Car Model not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const brand = await CarModelModelFacade.getConnectedBrand(carModelId)
    const predecessor = await CarModelModelFacade.getConnectedPredecessor(carModelId)
    const successor = await CarModelModelFacade.getConnectedSuccessor(carModelId)

    res.render('templates/car-models/car-model-page', {
        pageTitle: `${carModel.name} - Car Model`,
        node: {
            data: carModel,
            primary_properties: getNodeProperties(DataNodeType.CAR_MODEL),
            main_image: await CarModelModelFacade.getConnectedMainImage(carModelId),
        },
        relationships: {
            brand: {
                item: brand,
                primary_properties: getNodeProperties(DataNodeType.BRAND),
                thumbnails: await getBrandThumbnails(brand ? [brand] : []),
            },
            predecessor: {
                item: predecessor,
                primary_properties: getNodeProperties(DataNodeType.CAR_MODEL),
                thumbnails: await getCarModelThumbnails(predecessor ? [predecessor] : []),
            },
            successor: {
                item: successor,
                primary_properties: getNodeProperties(DataNodeType.CAR_MODEL),
                thumbnails: await getCarModelThumbnails(successor ? [successor] : []),
            },
            images: {
                items: await CarModelModelFacade.getConnectedImages(carModelId),
                primary_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
