import express from "express"
import {RacingGameModelFacade} from "../../../models/RacingGameModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getCarModelVariantThumbnails} from "../car-model-variants/getCarModelVariantThumbnails"

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
    res.render('templates/node-types/racing-games/racing-game-detail-page', {
        page_title: `${racingGame.name} - Racing Game`,
        node: {
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
        },
    })
}
