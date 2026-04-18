import express from "express"
import {ModelCarBrandModelFacade} from "../../../models/ModelCarBrandModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getVideoThumbnails} from "../videos/getVideoThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const modelCarBrandId = parseInt(req.params.id)
    const modelCarBrand = await ModelCarBrandModelFacade.getNodeById(modelCarBrandId)

    if (!modelCarBrand) {
        return sendResponse404(res)
    }

    const modelCars = await ModelCarBrandModelFacade.getConnectedModelCars(modelCarBrandId)
    const images = await ModelCarBrandModelFacade.getConnectedImages(modelCarBrandId)
    const videos = await ModelCarBrandModelFacade.getConnectedVideos(modelCarBrandId)

    res.render('templates/node-types/model-car-brands/model-car-brand-detail-page', {
        page_title: `${modelCarBrand.fields.name} - Model Car Brand`,
        node: {
            data: modelCarBrand,
            title: ModelCarBrandModelFacade.getNodeTitle(modelCarBrand),
            sub_title: ModelCarBrandModelFacade.getNodeSubTitle(modelCarBrand),
            node_properties: getNodeProperties(ControllerNodeType.MODEL_CAR_BRAND),
            main_image: await ModelCarBrandModelFacade.getConnectedMainImage(modelCarBrandId),
        },
        relationships: {
            model_cars: {
                items: modelCars,
                node_properties: getNodeProperties(ControllerNodeType.MODEL_CAR),
                thumbnails: await getNodeThumbnails(modelCars),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(ControllerNodeType.IMAGE),
                thumbnails: await getNodeThumbnails(images),
            },
            videos: {
                items: videos,
                node_properties: getNodeProperties(ControllerNodeType.VIDEO),
                thumbnails: await getVideoThumbnails(videos),
            },
        },
    })
}
