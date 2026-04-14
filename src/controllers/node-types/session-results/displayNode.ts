import express from "express"
import {SessionResultModelFacade} from "../../../models/SessionResultModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const sessionResultId = parseInt(req.params.id)
    const sessionResult = await SessionResultModelFacade.getNodeById(sessionResultId)

    if (!sessionResult) {
        return sendResponse404(res)
    }

    const racingSession = await SessionResultModelFacade.getConnectedRacingSession(sessionResultId)
    const images = await SessionResultModelFacade.getConnectedImages(sessionResultId)
    const lapTimes = await SessionResultModelFacade.getConnectedLapTimes(sessionResultId)
    const carModelVariant = await SessionResultModelFacade.getConnectedCarModelVariant(sessionResultId)

    res.render('templates/node-types/session-results/session-result-detail-page', {
        page_title: `${sessionResult.fields.driver_name} - Session Result`,
        node: {
            type: ControllerNodeType.SESSION_RESULT,
            data: sessionResult,
            title: SessionResultModelFacade.getNodeTitle(sessionResult),
            sub_title: SessionResultModelFacade.getNodeSubTitle(sessionResult),
            node_properties: getNodeProperties(DataNodeType.SESSION_RESULT),
            main_image: await SessionResultModelFacade.getConnectedMainImage(sessionResultId),
        },
        relationships: {
            racing_session: {
                item: racingSession,
                node_properties: getNodeProperties(DataNodeType.RACING_SESSION),
                thumbnails: await getNodeThumbnails(racingSession ? [racingSession] : []),
            },
            lap_times: {
                items: lapTimes,
                node_properties: getNodeProperties(DataNodeType.LAP_TIME),
                thumbnails: await getNodeThumbnails(lapTimes),
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
        },
    })
}
