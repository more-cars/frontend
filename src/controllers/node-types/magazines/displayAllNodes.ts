import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {MagazineModelFacade} from "../../../models/MagazineModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const magazines = await MagazineModelFacade.getAllNodes({page})

    res.render('templates/node-types/magazines/magazine-overview-page', {
        page_title: 'All Magazines',
        main_headline: 'All Magazines',
        node_type: ControllerNodeType.MAGAZINE,
        node_collection: magazines,
        thumbnails: await getNodeThumbnails(magazines),
        node_properties: getNodeProperties(ControllerNodeType.MAGAZINE),
        pagination: {
            page,
            total: await MagazineModelFacade.getTotalNodeCount(),
        },
    })
}
