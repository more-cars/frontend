import express from "express"
import {CarModelModelFacade} from "../../../models/CarModelModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getVideoThumbnails} from "../videos/getVideoThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const carModelId = parseInt(req.params.id)
    const carModel = await CarModelModelFacade.getNodeById(carModelId)

    if (!carModel) {
        return sendResponse404(res)
    }

    const brand = await CarModelModelFacade.getConnectedBrand(carModelId)
    const predecessor = await CarModelModelFacade.getConnectedPredecessor(carModelId)
    const successor = await CarModelModelFacade.getConnectedSuccessor(carModelId)
    const carModelVariants = await CarModelModelFacade.getConnectedCarModelVariants(carModelId)
    const magazineIssues = await CarModelModelFacade.getConnectedMagazineIssues(carModelId)
    const programmeEpisodes = await CarModelModelFacade.getConnectedProgrammeEpisodes(carModelId)
    const images = await CarModelModelFacade.getConnectedImages(carModelId)
    const videos = await CarModelModelFacade.getConnectedVideos(carModelId)

    res.render('templates/node-types/car-models/car-model-detail-page', {
        page_title: `${carModel.fields.name} - Car Model`,
        node: {
            data: carModel,
            title: CarModelModelFacade.getNodeTitle(carModel),
            sub_title: CarModelModelFacade.getNodeSubTitle(carModel),
            node_properties: getNodeProperties(DataNodeType.CAR_MODEL),
            main_image: await CarModelModelFacade.getConnectedMainImage(carModelId),
        },
        relationships: {
            brand: {
                item: brand,
                node_properties: getNodeProperties(DataNodeType.BRAND),
                thumbnails: await getNodeThumbnails(brand ? [brand] : []),
            },
            predecessor: {
                item: predecessor,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL),
                thumbnails: await getNodeThumbnails(predecessor ? [predecessor] : []),
            },
            successor: {
                item: successor,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL),
                thumbnails: await getNodeThumbnails(successor ? [successor] : []),
            },
            car_model_variants: {
                items: carModelVariants,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL_VARIANT),
                thumbnails: await getNodeThumbnails(carModelVariants),
            },
            magazine_issues: {
                items: magazineIssues,
                node_properties: getNodeProperties(DataNodeType.MAGAZINE_ISSUE),
                thumbnails: await getNodeThumbnails(magazineIssues),
            },
            programme_episodes: {
                items: programmeEpisodes,
                node_properties: getNodeProperties(DataNodeType.PROGRAMME_EPISODE),
                thumbnails: await getNodeThumbnails(programmeEpisodes),
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
