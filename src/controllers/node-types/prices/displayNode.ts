import express from "express"
import {PriceModelFacade} from "../../../models/PriceModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getCarModelVariantThumbnails} from "../car-model-variants/getCarModelVariantThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const priceId = parseInt(req.params.id)
    const price = await PriceModelFacade.getNodeById(priceId)

    if (!price) {
        return res.render('templates/node-types/prices/price-not-found-page', {
            page_title: `Price not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const carModelVariant = await PriceModelFacade.getConnectedCarModelVariant(priceId)
    const images = await PriceModelFacade.getConnectedImages(priceId)

    res.render('templates/node-types/prices/price-detail-page', {
        page_title: `${price.price} - Price`,
        node: {
            type: ControllerNodeType.PRICE,
            data: price,
            title: PriceModelFacade.getNodeTitle(price),
            sub_title: PriceModelFacade.getNodeSubTitle(price),
            node_properties: getNodeProperties(DataNodeType.PRICE),
            main_image: await PriceModelFacade.getConnectedMainImage(priceId),
        },
        relationships: {
            car_model_variant: {
                item: carModelVariant,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL_VARIANT),
                thumbnails: await getCarModelVariantThumbnails(carModelVariant ? [carModelVariant] : []),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
