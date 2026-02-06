import express from "express"
import {CarModelVariantModelFacade} from "../../../models/CarModelVariantModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const carModelVariantId = parseInt(req.params.id)
    const carModelVariant = await CarModelVariantModelFacade.getNodeById(carModelVariantId)

    if (!carModelVariant) {
        return res.render('templates/node-types/car-model-variants/car-model-variant-not-found-page', {
            page_title: `Car Model Variant not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    res.render('templates/node-types/car-model-variants/car-model-variant-detail-page', {
        page_title: `${carModelVariant.name} - Car Model Variant`,
        node: {
            data: carModelVariant,
            node_properties: getNodeProperties(DataNodeType.CAR_MODEL_VARIANT),
            main_image: await CarModelVariantModelFacade.getConnectedMainImage(carModelVariantId),
        },
        relationships: {
        },
    })
}
