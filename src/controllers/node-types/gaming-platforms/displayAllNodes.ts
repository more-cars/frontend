import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {GamingPlatformModelFacade} from "../../../models/GamingPlatformModelFacade"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const gamingPlatforms = await GamingPlatformModelFacade.getAllNodes({page})

    res.render('templates/node-types/gaming-platforms/gaming-platform-overview-page', {
        page_title: 'All Gaming Platforms',
        main_headline: 'All Gaming Platforms',
        node_collection: gamingPlatforms,
        node_properties: getNodeProperties(DataNodeType.GAMING_PLATFORM),
        pagination: {
            page,
            total: await GamingPlatformModelFacade.getTotalNodeCount(),
        },
    })
}
