import express from "express"
import {MagazineModelFacade} from "../../../models/MagazineModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getVideoThumbnails} from "../videos/getVideoThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const magazineId = parseInt(req.params.id)
    const magazine = await MagazineModelFacade.getNodeById(magazineId)

    if (!magazine) {
        return sendResponse404(res)
    }

    const magazineIssues = await MagazineModelFacade.getConnectedMagazineIssues(magazineId)
    const images = await MagazineModelFacade.getConnectedImages(magazineId)
    const videos = await MagazineModelFacade.getConnectedVideos(magazineId)

    res.render('templates/node-types/magazines/magazine-detail-page', {
        page_title: `${MagazineModelFacade.getNodeTitle(magazine)} - Magazine`,
        node: {
            data: magazine,
            title: MagazineModelFacade.getNodeTitle(magazine),
            sub_title: MagazineModelFacade.getNodeSubTitle(magazine),
            node_properties: getNodeProperties(DataNodeType.MAGAZINE),
            main_image: await MagazineModelFacade.getConnectedMainImage(magazineId),
        },
        relationships: {
            magazine_issues: {
                items: magazineIssues,
                node_properties: getNodeProperties(DataNodeType.MAGAZINE_ISSUE),
                thumbnails: await getNodeThumbnails(magazineIssues),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
                thumbnails: await getNodeThumbnails(images),
            },
            videos: {
                items: videos,
                node_properties: getNodeProperties(DataNodeType.VIDEO),
                thumbnails: await getVideoThumbnails(videos),
            },
        },
    })
}
