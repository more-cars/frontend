import express from "express"
import {GamingPlatformModelFacade} from "../../../models/GamingPlatformModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const searchParams = determineSearchParams(req)
    const gamingPlatforms = await GamingPlatformModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/gaming-platforms/gaming-platform-overview-page', {
        page_title: 'All Gaming Platforms',
        main_headline: 'All Gaming Platforms',
        node_type: ControllerNodeType.GAMING_PLATFORM,
        node_collection: gamingPlatforms,
        thumbnails: await getNodeThumbnails(gamingPlatforms),
        node_properties: getNodeProperties(ControllerNodeType.GAMING_PLATFORM),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await GamingPlatformModelFacade.getTotalNodeCount(),
        },
    })
}
