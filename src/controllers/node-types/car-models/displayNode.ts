import express from "express"
import {CarModelModelFacade} from "../../../models/CarModelModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getBrandThumbnails} from "../brands/getBrandThumbnails"
import {getCarModelThumbnails} from "./getCarModelThumbnails"
import {getCarModelVariantThumbnails} from "../car-model-variants/getCarModelVariantThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const carModelId = parseInt(req.params.id)
    const carModel = await CarModelModelFacade.getNodeById(carModelId)

    if (!carModel) {
        return res.render('templates/node-types/car-models/car-model-not-found-page', {
            page_title: `Car Model not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const brand = await CarModelModelFacade.getConnectedBrand(carModelId)
    const predecessor = await CarModelModelFacade.getConnectedPredecessor(carModelId)
    const successor = await CarModelModelFacade.getConnectedSuccessor(carModelId)
    const carModelVariants = await CarModelModelFacade.getConnectedCarModelVariants(carModelId)
    const images = await CarModelModelFacade.getConnectedImages(carModelId)

    res.render('templates/node-types/car-models/car-model-detail-page', {
        page_title: `${carModel.name} - Car Model`,
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
            car_model_variants: {
                items: carModelVariants,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL_VARIANT),
                thumbnails: await getCarModelVariantThumbnails(carModelVariants),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
