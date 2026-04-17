import express from "express"
import {MagazineIssueModelFacade} from "../../../models/MagazineIssueModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getVideoThumbnails} from "../videos/getVideoThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const magazineIssueId = parseInt(req.params.id)
    const magazineIssue = await MagazineIssueModelFacade.getNodeById(magazineIssueId)

    if (!magazineIssue) {
        return sendResponse404(res)
    }

    const magazine = await MagazineIssueModelFacade.getConnectedMagazine(magazineIssueId)
    const predecessor = await MagazineIssueModelFacade.getConnectedPredecessor(magazineIssueId)
    const successor = await MagazineIssueModelFacade.getConnectedSuccessor(magazineIssueId)
    const carModels = await MagazineIssueModelFacade.getConnectedCarModels(magazineIssueId)
    const carModelVariants = await MagazineIssueModelFacade.getConnectedCarModelVariants(magazineIssueId)
    const ratings = await MagazineIssueModelFacade.getConnectedRatings(magazineIssueId)
    const racingEvents = await MagazineIssueModelFacade.getConnectedRacingEvents(magazineIssueId)
    const images = await MagazineIssueModelFacade.getConnectedImages(magazineIssueId)
    const videos = await MagazineIssueModelFacade.getConnectedVideos(magazineIssueId)

    res.render('templates/node-types/magazine-issues/magazine-issue-detail-page', {
        page_title: `${magazineIssue.fields.title} - Magazine Issue`,
        node: {
            data: magazineIssue,
            title: MagazineIssueModelFacade.getNodeTitle(magazineIssue),
            sub_title: MagazineIssueModelFacade.getNodeSubTitle(magazineIssue),
            node_properties: getNodeProperties(DataNodeType.MAGAZINE_ISSUE),
            main_image: await MagazineIssueModelFacade.getConnectedMainImage(magazineIssueId),
        },
        relationships: {
            magazine: {
                item: magazine,
                node_properties: getNodeProperties(DataNodeType.MAGAZINE),
                thumbnails: await getNodeThumbnails(magazine ? [magazine] : []),
            },
            predecessor: {
                item: predecessor,
                node_properties: getNodeProperties(DataNodeType.MAGAZINE_ISSUE),
                thumbnails: await getNodeThumbnails(predecessor ? [predecessor] : []),
            },
            successor: {
                item: successor,
                node_properties: getNodeProperties(DataNodeType.MAGAZINE_ISSUE),
                thumbnails: await getNodeThumbnails(successor ? [successor] : []),
            },
            car_models: {
                items: carModels,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL),
                thumbnails: await getNodeThumbnails(carModels),
            },
            car_model_variants: {
                items: carModelVariants,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL_VARIANT),
                thumbnails: await getNodeThumbnails(carModelVariants),
            },
            ratings: {
                items: ratings,
                node_properties: getNodeProperties(DataNodeType.RATING),
                thumbnails: await getNodeThumbnails(ratings),
            },
            racing_events: {
                items: racingEvents,
                node_properties: getNodeProperties(DataNodeType.RACING_EVENT),
                thumbnails: await getNodeThumbnails(racingEvents),
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
