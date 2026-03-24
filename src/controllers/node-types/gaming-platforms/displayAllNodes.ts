import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {GamingPlatformModelFacade} from "../../../models/GamingPlatformModelFacade"
import {getAllNodeTitles} from "../../lib/getAllNodeTitles"
import {getGamingPlatformThumbnails} from "./getGamingPlatformThumbnails"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {ControllerNodeType} from "../../types/ControllerNodeType"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const gamingPlatforms = await GamingPlatformModelFacade.getAllNodes({page})

    res.render('templates/node-types/gaming-platforms/gaming-platform-overview-page', {
        page_title: 'All Gaming Platforms',
        main_headline: 'All Gaming Platforms',
        node_type: ControllerNodeType.GAMING_PLATFORM,
        node_collection: gamingPlatforms,
        node_titles: getAllNodeTitles(gamingPlatforms, GamingPlatformModelFacade.getNodeTitle),
        thumbnails: await getGamingPlatformThumbnails(gamingPlatforms),
        node_properties: getNodeProperties(DataNodeType.GAMING_PLATFORM),
        pagination: {
            page,
            total: await GamingPlatformModelFacade.getTotalNodeCount(),
        },
    })
}
