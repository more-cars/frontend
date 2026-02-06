import express from "express"
import {CarModelVariantModelFacade} from "../../../models/CarModelVariantModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getCarModelThumbnails} from "../car-models/getCarModelThumbnails"
import {getLapTimeThumbnails} from "../lap-times/getLapTimeThumbnails"
import {getSessionResultThumbnails} from "../session-results/getSessionResultThumbnails"

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

    const carModel = await CarModelVariantModelFacade.getConnectedCarModel(carModelVariantId)
    const lapTimes = await CarModelVariantModelFacade.getConnectedLapTimes(carModelVariantId)
    const sessionResults = await CarModelVariantModelFacade.getConnectedSessionResults(carModelVariantId)

    res.render('templates/node-types/car-model-variants/car-model-variant-detail-page', {
        page_title: `${carModelVariant.name} - Car Model Variant`,
        node: {
            data: carModelVariant,
            node_properties: getNodeProperties(DataNodeType.CAR_MODEL_VARIANT),
            main_image: await CarModelVariantModelFacade.getConnectedMainImage(carModelVariantId),
        },
        relationships: {
            car_model: {
                item: carModel,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL),
                thumbnails: await getCarModelThumbnails(carModel ? [carModel] : []),
            },
            lap_times: {
                items: lapTimes,
                node_properties: getNodeProperties(DataNodeType.LAP_TIME),
                thumbnails: await getLapTimeThumbnails(lapTimes),
            },
            session_results: {
                items: sessionResults,
                node_properties: getNodeProperties(DataNodeType.SESSION_RESULT),
                thumbnails: await getSessionResultThumbnails(sessionResults),
            },
        },
    })
}
