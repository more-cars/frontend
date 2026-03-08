import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {MagazineModelFacade} from "../../../models/MagazineModelFacade"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const magazines = await MagazineModelFacade.getAllNodes({page})

    res.render('templates/node-types/magazines/magazine-overview-page', {
        page_title: 'All Magazines',
        main_headline: 'All Magazines',
        node_collection: magazines,
        node_properties: getNodeProperties(DataNodeType.MAGAZINE),
        pagination: {
            page,
            total: await MagazineModelFacade.getTotalNodeCount(),
        },
    })
}
