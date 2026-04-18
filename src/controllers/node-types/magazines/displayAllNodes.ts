import express from "express"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {MagazineModelFacade} from "../../../models/MagazineModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const searchParams = determineSearchParams(req)
    const magazines = await MagazineModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/magazines/magazine-overview-page', {
        page_title: 'All Magazines',
        main_headline: 'All Magazines',
        node_type: ControllerNodeType.MAGAZINE,
        node_collection: magazines,
        thumbnails: await getNodeThumbnails(magazines),
        node_properties: getNodeProperties(ControllerNodeType.MAGAZINE),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await MagazineModelFacade.getTotalNodeCount(),
        },
    })
}
