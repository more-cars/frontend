import express from "express"
import {MotorShowModelFacade} from "../../../models/MotorShowModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getVideoThumbnails} from "../videos/getVideoThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const motorShowId = parseInt(req.params.id)
    const motorShow = await MotorShowModelFacade.getNodeById(motorShowId)

    if (!motorShow) {
        return sendResponse404(res)
    }

    const carModelVariants = await MotorShowModelFacade.getConnectedCarModelVariants(motorShowId)
    const images = await MotorShowModelFacade.getConnectedImages(motorShowId)
    const videos = await MotorShowModelFacade.getConnectedVideos(motorShowId)

    res.render('templates/node-types/motor-shows/motor-show-detail-page', {
        page_title: `${motorShow.fields.name} - Motor Show`,
        node: {
            data: motorShow,
            title: MotorShowModelFacade.getNodeTitle(motorShow),
            sub_title: MotorShowModelFacade.getNodeSubTitle(motorShow),
            node_properties: getNodeProperties(ControllerNodeType.MOTOR_SHOW),
            main_image: await MotorShowModelFacade.getConnectedMainImage(motorShowId),
        },
        relationships: {
            car_model_variants: {
                items: carModelVariants,
                node_properties: getNodeProperties(ControllerNodeType.CAR_MODEL_VARIANT),
                thumbnails: await getNodeThumbnails(carModelVariants),
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
