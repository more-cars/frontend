import express from "express"
import {MagazineIssueModelFacade} from "../../../models/MagazineIssueModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getMagazineThumbnails} from "../magazines/getMagazineThumbnails"
import {getMagazineIssueThumbnails} from "./getMagazineIssueThumbnails"
import {getCarModelThumbnails} from "../car-models/getCarModelThumbnails"

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

    res.render('templates/node-types/magazine-issues/magazine-issue-detail-page', {
        page_title: `${magazineIssue.title} - Magazine Issue`,
        main_headline: `${magazineIssue.title}`,
        node: {
            type: ControllerNodeType.MAGAZINE_ISSUE,
            data: magazineIssue,
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
        },
    })
}
