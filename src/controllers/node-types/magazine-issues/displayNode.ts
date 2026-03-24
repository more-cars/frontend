import express from "express"
import {MagazineIssueModelFacade} from "../../../models/MagazineIssueModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getMagazineThumbnails} from "../magazines/getMagazineThumbnails"
import {getMagazineIssueThumbnails} from "./getMagazineIssueThumbnails"
import {getCarModelThumbnails} from "../car-models/getCarModelThumbnails"
import {getCarModelVariantThumbnails} from "../car-model-variants/getCarModelVariantThumbnails"
import {getRatingThumbnails} from "../ratings/getRatingThumbnails"
import {getRacingEventThumbnails} from "../racing-events/getRacingEventThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const magazineIssueId = parseInt(req.params.id)
    const magazineIssue = await MagazineIssueModelFacade.getNodeById(magazineIssueId)

    if (!magazineIssue) {
        return res.render('templates/node-types/magazine-issues/magazine-issue-not-found-page', {
            page_title: `Magazine Issue not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const magazine = await MagazineIssueModelFacade.getConnectedMagazine(magazineIssueId)
    const predecessor = await MagazineIssueModelFacade.getConnectedPredecessor(magazineIssueId)
    const successor = await MagazineIssueModelFacade.getConnectedSuccessor(magazineIssueId)
    const carModels = await MagazineIssueModelFacade.getConnectedCarModels(magazineIssueId)
    const carModelVariants = await MagazineIssueModelFacade.getConnectedCarModelVariants(magazineIssueId)
    const ratings = await MagazineIssueModelFacade.getConnectedRatings(magazineIssueId)
    const racingEvents = await MagazineIssueModelFacade.getConnectedRacingEvents(magazineIssueId)
    const images = await MagazineIssueModelFacade.getConnectedImages(magazineIssueId)

    res.render('templates/node-types/magazine-issues/magazine-issue-detail-page', {
        page_title: `${magazineIssue.title} - Magazine Issue`,
        node: {
            type: ControllerNodeType.MAGAZINE_ISSUE,
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
                thumbnails: await getMagazineThumbnails(magazine ? [magazine] : []),
            },
            predecessor: {
                item: predecessor,
                node_properties: getNodeProperties(DataNodeType.MAGAZINE_ISSUE),
                thumbnails: await getMagazineIssueThumbnails(predecessor ? [predecessor] : []),
            },
            successor: {
                item: successor,
                node_properties: getNodeProperties(DataNodeType.MAGAZINE_ISSUE),
                thumbnails: await getMagazineIssueThumbnails(successor ? [successor] : []),
            },
            car_models: {
                items: carModels,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL),
                thumbnails: await getCarModelThumbnails(carModels),
            },
            car_model_variants: {
                items: carModelVariants,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL_VARIANT),
                thumbnails: await getCarModelVariantThumbnails(carModelVariants),
            },
            ratings: {
                items: ratings,
                node_properties: getNodeProperties(DataNodeType.RATING),
                thumbnails: await getRatingThumbnails(ratings),
            },
            racing_events: {
                items: racingEvents,
                node_properties: getNodeProperties(DataNodeType.RACING_EVENT),
                thumbnails: await getRacingEventThumbnails(racingEvents),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
