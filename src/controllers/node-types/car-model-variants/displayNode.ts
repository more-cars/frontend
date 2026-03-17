import express from "express"
import {CarModelVariantModelFacade} from "../../../models/CarModelVariantModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getCarModelThumbnails} from "../car-models/getCarModelThumbnails"
import {getMagazineIssueThumbnails} from "../magazine-issues/getMagazineIssueThumbnails"
import {getRatingThumbnails} from "../ratings/getRatingThumbnails"
import {getProgrammeEpisodeThumbnails} from "../programme-episodes/getProgrammeEpisodeThumbnails"
import {getLapTimeThumbnails} from "../lap-times/getLapTimeThumbnails"
import {getSessionResultThumbnails} from "../session-results/getSessionResultThumbnails"
import {getRacingGameThumbnails} from "../racing-games/getRacingGameThumbnails"

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
    const magazineIssues = await CarModelVariantModelFacade.getConnectedMagazineIssues(carModelVariantId)
    const ratings = await CarModelVariantModelFacade.getConnectedRatings(carModelVariantId)
    const programmeEpisodes = await CarModelVariantModelFacade.getConnectedProgrammeEpisodes(carModelVariantId)
    const lapTimes = await CarModelVariantModelFacade.getConnectedLapTimes(carModelVariantId)
    const sessionResults = await CarModelVariantModelFacade.getConnectedSessionResults(carModelVariantId)
    const racingGames = await CarModelVariantModelFacade.getConnectedRacingGames(carModelVariantId)
    const images = await CarModelVariantModelFacade.getConnectedImages(carModelVariantId)

    res.render('templates/node-types/car-model-variants/car-model-variant-detail-page', {
        page_title: `${carModelVariant.name} - Car Model Variant`,
        node: {
            type: ControllerNodeType.CAR_MODEL_VARIANT,
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
            magazine_issues: {
                items: magazineIssues,
                node_properties: getNodeProperties(DataNodeType.MAGAZINE_ISSUE),
                thumbnails: await getMagazineIssueThumbnails(magazineIssues),
            },
            ratings: {
                items: ratings,
                node_properties: getNodeProperties(DataNodeType.RATING),
                thumbnails: await getRatingThumbnails(ratings),
            },
            programme_episodes: {
                items: programmeEpisodes,
                node_properties: getNodeProperties(DataNodeType.PROGRAMME_EPISODE),
                thumbnails: await getProgrammeEpisodeThumbnails(programmeEpisodes),
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
            racing_games: {
                items: racingGames,
                node_properties: getNodeProperties(DataNodeType.RACING_GAME),
                thumbnails: await getRacingGameThumbnails(racingGames),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
