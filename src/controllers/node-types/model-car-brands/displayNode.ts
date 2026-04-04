import express from "express"
import {ModelCarBrandModelFacade} from "../../../models/ModelCarBrandModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const modelCarBrandId = parseInt(req.params.id)
    const modelCarBrand = await ModelCarBrandModelFacade.getNodeById(modelCarBrandId)

    if (!modelCarBrand) {
        return sendResponse404(res)
    }

    const modelCars = await ModelCarBrandModelFacade.getConnectedModelCars(modelCarBrandId)
    const images = await ModelCarBrandModelFacade.getConnectedImages(modelCarBrandId)

    res.render('templates/node-types/model-car-brands/model-car-brand-detail-page', {
        page_title: `${modelCarBrand.fields.name} - Model Car Brand`,
        node: {
            type: ControllerNodeType.MODEL_CAR_BRAND,
            data: modelCarBrand,
            title: ModelCarBrandModelFacade.getNodeTitle(modelCarBrand),
            sub_title: ModelCarBrandModelFacade.getNodeSubTitle(modelCarBrand),
            node_properties: getNodeProperties(DataNodeType.MODEL_CAR_BRAND),
            main_image: await ModelCarBrandModelFacade.getConnectedMainImage(modelCarBrandId),
        },
        relationships: {
            model_cars: {
                items: modelCars,
                node_properties: getNodeProperties(DataNodeType.MODEL_CAR),
                thumbnails: await getNodeThumbnails(modelCars),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
