import express from "express"
import {RacingGameModelFacade} from "../../../models/RacingGameModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const racingGameId = parseInt(req.params.id)
    const racingGame = await RacingGameModelFacade.getNodeById(racingGameId)

    if (!racingGame) {
        return sendResponse404(res)
    }

    const carModelVariants = await RacingGameModelFacade.getConnectedCarModelVariants(racingGameId)
    const trackLayouts = await RacingGameModelFacade.getConnectedTrackLayouts(racingGameId)
    const gamingPlatforms = await RacingGameModelFacade.getConnectedGamingPlatforms(racingGameId)
    const images = await RacingGameModelFacade.getConnectedImages(racingGameId)

    res.render('templates/node-types/racing-games/racing-game-detail-page', {
        page_title: `${racingGame.fields.name} - Racing Game`,
        node: {
            type: ControllerNodeType.RACING_GAME,
            data: racingGame,
            title: RacingGameModelFacade.getNodeTitle(racingGame),
            sub_title: RacingGameModelFacade.getNodeSubTitle(racingGame),
            node_properties: getNodeProperties(DataNodeType.RACING_GAME),
            main_image: await RacingGameModelFacade.getConnectedMainImage(racingGameId),
        },
        relationships: {
            car_model_variants: {
                items: carModelVariants,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL_VARIANT),
                thumbnails: await getNodeThumbnails(carModelVariants),
            },
            track_layouts: {
                items: trackLayouts,
                node_properties: getNodeProperties(DataNodeType.TRACK_LAYOUT),
                thumbnails: await getNodeThumbnails(trackLayouts),
            },
            gaming_platforms: {
                items: gamingPlatforms,
                node_properties: getNodeProperties(DataNodeType.GAMING_PLATFORM),
                thumbnails: await getNodeThumbnails(gamingPlatforms),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
