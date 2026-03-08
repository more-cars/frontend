import express from "express"
import {GamingPlatformModelFacade} from "../../../models/GamingPlatformModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const gamingPlatformId = parseInt(req.params.id)
    const gamingPlatform = await GamingPlatformModelFacade.getNodeById(gamingPlatformId)

    if (!gamingPlatform) {
        return res.render('templates/node-types/gaming-platforms/gaming-platform-not-found-page', {
            page_title: `Gaming Platform not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    res.render('templates/node-types/gaming-platforms/gaming-platform-detail-page', {
        page_title: `${gamingPlatform.name} - Gaming Platform`,
        node: {
            data: gamingPlatform,
            node_properties: getNodeProperties(DataNodeType.GAMING_PLATFORM),
        },
        relationships: {
        },
    })
}
