import express from "express"
import {CarModelVariantModelFacade} from "../../../models/CarModelVariantModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getVideoThumbnails} from "../videos/getVideoThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const carModelVariantId = parseInt(req.params.id)
    const carModelVariant = await CarModelVariantModelFacade.getNodeById(carModelVariantId)

    if (!carModelVariant) {
        return sendResponse404(res)
    }

    const carModel = await CarModelVariantModelFacade.getConnectedCarModel(carModelVariantId)
    const magazineIssues = await CarModelVariantModelFacade.getConnectedMagazineIssues(carModelVariantId)
    const ratings = await CarModelVariantModelFacade.getConnectedRatings(carModelVariantId)
    const prices = await CarModelVariantModelFacade.getConnectedPrices(carModelVariantId)
    const programmeEpisodes = await CarModelVariantModelFacade.getConnectedProgrammeEpisodes(carModelVariantId)
    const lapTimes = await CarModelVariantModelFacade.getConnectedLapTimes(carModelVariantId)
    const sessionResults = await CarModelVariantModelFacade.getConnectedSessionResults(carModelVariantId)
    const racingGames = await CarModelVariantModelFacade.getConnectedRacingGames(carModelVariantId)
    const modelCars = await CarModelVariantModelFacade.getConnectedModelCars(carModelVariantId)
    const motorShows = await CarModelVariantModelFacade.getConnectedMotorShows(carModelVariantId)
    const images = await CarModelVariantModelFacade.getConnectedImages(carModelVariantId)
    const videos = await CarModelVariantModelFacade.getConnectedVideos(carModelVariantId)

    res.render('templates/node-types/car-model-variants/car-model-variant-detail-page', {
        page_title: `${carModelVariant.fields.name} - Car Model Variant`,
        node: {
            data: carModelVariant,
            title: CarModelVariantModelFacade.getNodeTitle(carModelVariant),
            sub_title: CarModelVariantModelFacade.getNodeSubTitle(carModelVariant),
            node_properties: getNodeProperties(DataNodeType.CAR_MODEL_VARIANT),
            main_image: await CarModelVariantModelFacade.getConnectedMainImage(carModelVariantId),
        },
        relationships: {
            car_model: {
                item: carModel,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL),
                thumbnails: await getNodeThumbnails(carModel ? [carModel] : []),
            },
            magazine_issues: {
                items: magazineIssues,
                node_properties: getNodeProperties(DataNodeType.MAGAZINE_ISSUE),
                thumbnails: await getNodeThumbnails(magazineIssues),
            },
            ratings: {
                items: ratings,
                node_properties: getNodeProperties(DataNodeType.RATING),
                thumbnails: await getNodeThumbnails(ratings),
            },
            prices: {
                items: prices,
                node_properties: getNodeProperties(DataNodeType.PRICE),
                thumbnails: await getNodeThumbnails(prices),
            },
            programme_episodes: {
                items: programmeEpisodes,
                node_properties: getNodeProperties(DataNodeType.PROGRAMME_EPISODE),
                thumbnails: await getNodeThumbnails(programmeEpisodes),
            },
            lap_times: {
                items: lapTimes,
                node_properties: getNodeProperties(DataNodeType.LAP_TIME),
                thumbnails: await getNodeThumbnails(lapTimes),
            },
            session_results: {
                items: sessionResults,
                node_properties: getNodeProperties(DataNodeType.SESSION_RESULT),
                thumbnails: await getNodeThumbnails(sessionResults),
            },
            racing_games: {
                items: racingGames,
                node_properties: getNodeProperties(DataNodeType.RACING_GAME),
                thumbnails: await getNodeThumbnails(racingGames),
            },
            model_cars: {
                items: modelCars,
                node_properties: getNodeProperties(DataNodeType.MODEL_CAR),
                thumbnails: await getNodeThumbnails(modelCars),
            },
            motor_shows: {
                items: motorShows,
                node_properties: getNodeProperties(DataNodeType.MOTOR_SHOW),
                thumbnails: await getNodeThumbnails(motorShows),
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
