import express from "express"
import {GamingPlatformModelFacade} from "../../../models/GamingPlatformModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"
import {sendResponse400} from "../../responses/sendResponse400"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    let searchParams
    try {
        searchParams = determineSearchParams(req, ControllerNodeType.GAMING_PLATFORM)
    } catch (error) {
        console.error(error)
        return sendResponse400(res)
    }

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
