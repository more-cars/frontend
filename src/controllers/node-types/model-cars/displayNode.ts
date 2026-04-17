import express from "express"
import {ModelCarModelFacade} from "../../../models/ModelCarModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getVideoThumbnails} from "../videos/getVideoThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const modelCarId = parseInt(req.params.id)
    const modelCar = await ModelCarModelFacade.getNodeById(modelCarId)

    if (!modelCar) {
        return sendResponse404(res)
    }

    const modelCarBrand = await ModelCarModelFacade.getConnectedModelCarBrand(modelCarId)
    const carModelVariant = await ModelCarModelFacade.getConnectedCarModelVariant(modelCarId)
    const images = await ModelCarModelFacade.getConnectedImages(modelCarId)
    const videos = await ModelCarModelFacade.getConnectedVideos(modelCarId)

    res.render('templates/node-types/model-cars/model-car-detail-page', {
        page_title: `${modelCar.fields.name} - Model Car`,
        node: {
            data: modelCar,
            title: ModelCarModelFacade.getNodeTitle(modelCar),
            sub_title: ModelCarModelFacade.getNodeSubTitle(modelCar),
            node_properties: getNodeProperties(DataNodeType.MODEL_CAR),
            main_image: await ModelCarModelFacade.getConnectedMainImage(modelCarId),
        },
        relationships: {
            model_car_brand: {
                item: modelCarBrand,
                node_properties: getNodeProperties(DataNodeType.MODEL_CAR_BRAND),
                thumbnails: await getNodeThumbnails(modelCarBrand ? [modelCarBrand] : []),
            },
            car_model_variant: {
                item: carModelVariant,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL_VARIANT),
                thumbnails: await getNodeThumbnails(carModelVariant ? [carModelVariant] : []),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
            videos: {
                items: videos,
                node_properties: getNodeProperties(DataNodeType.VIDEO),
                thumbnails: await getVideoThumbnails(videos),
            },
        },
    })
}
