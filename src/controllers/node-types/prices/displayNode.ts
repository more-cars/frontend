import express from "express"
import {PriceModelFacade} from "../../../models/PriceModelFacade"
import {formatPrice} from "../../lib/formatPrice"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const priceId = parseInt(req.params.id)
    const price = await PriceModelFacade.getNodeById(priceId)

    if (!price) {
        return sendResponse404(res)
    }

    const carModelVariant = await PriceModelFacade.getConnectedCarModelVariant(priceId)
    const images = await PriceModelFacade.getConnectedImages(priceId)

    res.render('templates/node-types/prices/price-detail-page', {
        page_title: `${formatPrice(price.fields.price, price.fields.currency_code)} - Car Price`,
        node: {
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
                thumbnails: await getNodeThumbnails(carModelVariant ? [carModelVariant] : []),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
