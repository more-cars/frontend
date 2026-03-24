import express from "express"
import {MagazineModelFacade} from "../../../models/MagazineModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getMagazineIssueThumbnails} from "../magazine-issues/getMagazineIssueThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const magazineId = parseInt(req.params.id)
    const magazine = await MagazineModelFacade.getNodeById(magazineId)

    if (!magazine) {
        return res.render('templates/node-types/magazines/magazine-not-found-page', {
            page_title: `Magazine not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const magazineIssues = await MagazineModelFacade.getConnectedMagazineIssues(magazineId)
    const images = await MagazineModelFacade.getConnectedImages(magazineId)

    res.render('templates/node-types/magazines/magazine-detail-page', {
        page_title: `${magazine.name} - Magazine`,
        node: {
            type: ControllerNodeType.MAGAZINE,
            data: magazine,
            title: MagazineModelFacade.getNodeTitle(magazine),
            node_properties: getNodeProperties(DataNodeType.MAGAZINE),
            main_image: await MagazineModelFacade.getConnectedMainImage(magazineId),
        },
        relationships: {
            magazine_issues: {
                items: magazineIssues,
                node_properties: getNodeProperties(DataNodeType.MAGAZINE_ISSUE),
                thumbnails: await getMagazineIssueThumbnails(magazineIssues),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
