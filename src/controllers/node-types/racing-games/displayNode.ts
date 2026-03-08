import express from "express"
import {RacingGameModelFacade} from "../../../models/RacingGameModelFacade"
import {ControllerNodeType} from "../../types/DataNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getCarModelVariantThumbnails} from "../car-model-variants/getCarModelVariantThumbnails"
import {getTrackLayoutThumbnails} from "../track-layouts/getTrackLayoutThumbnails"
import {getGamingPlatformThumbnails} from "../gaming-platforms/getGamingPlatformThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const racingGameId = parseInt(req.params.id)
    const racingGame = await RacingGameModelFacade.getNodeById(racingGameId)

    if (!racingGame) {
        return res.render('templates/node-types/racing-games/racing-game-not-found-page', {
            page_title: `Racing Game not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const carModelVariants = await RacingGameModelFacade.getConnectedCarModelVariants(racingGameId)
    const trackLayouts = await RacingGameModelFacade.getConnectedTrackLayouts(racingGameId)
    const gamingPlatforms = await RacingGameModelFacade.getConnectedGamingPlatforms(racingGameId)
    const images = await RacingGameModelFacade.getConnectedImages(racingGameId)

    res.render('templates/node-types/racing-games/racing-game-detail-page', {
        page_title: `${racingGame.name} - Racing Game`,
        node: {
            type: ControllerNodeType.RACING_GAME,
            data: racingGame,
            node_properties: getNodeProperties(DataNodeType.RACING_GAME),
            main_image: await RacingGameModelFacade.getConnectedMainImage(racingGameId),
        },
        relationships: {
            car_model_variants: {
                items: carModelVariants,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL_VARIANT),
                thumbnails: await getCarModelVariantThumbnails(carModelVariants),
            },
            track_layouts: {
                items: trackLayouts,
                node_properties: getNodeProperties(DataNodeType.TRACK_LAYOUT),
                thumbnails: await getTrackLayoutThumbnails(trackLayouts),
            },
            gaming_platforms: {
                items: gamingPlatforms,
                node_properties: getNodeProperties(DataNodeType.GAMING_PLATFORM),
                thumbnails: await getGamingPlatformThumbnails(gamingPlatforms),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
