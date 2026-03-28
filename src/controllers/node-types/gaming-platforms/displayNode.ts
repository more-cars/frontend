import express from "express"
import {GamingPlatformModelFacade} from "../../../models/GamingPlatformModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getRacingGameThumbnails} from "../racing-games/getRacingGameThumbnails"
import {sendResponse404} from "../../responses/sendResponse404"

export async function displayNode(req: express.Request, res: express.Response) {
    const gamingPlatformId = parseInt(req.params.id)
    const gamingPlatform = await GamingPlatformModelFacade.getNodeById(gamingPlatformId)

    if (!gamingPlatform) {
        return sendResponse404(res)
    }

    const racingGames = await GamingPlatformModelFacade.getConnectedRacingGames(gamingPlatformId)
    const images = await GamingPlatformModelFacade.getConnectedImages(gamingPlatformId)

    res.render('templates/node-types/gaming-platforms/gaming-platform-detail-page', {
        page_title: `${gamingPlatform.fields.name} - Gaming Platform`,
        node: {
            type: ControllerNodeType.GAMING_PLATFORM,
            data: gamingPlatform,
            title: GamingPlatformModelFacade.getNodeTitle(gamingPlatform),
            sub_title: GamingPlatformModelFacade.getNodeSubTitle(gamingPlatform),
            node_properties: getNodeProperties(DataNodeType.GAMING_PLATFORM),
            main_image: await GamingPlatformModelFacade.getConnectedMainImage(gamingPlatformId),
        },
        relationships: {
            racing_games: {
                items: racingGames,
                node_properties: getNodeProperties(DataNodeType.RACING_GAME),
                thumbnails: await getRacingGameThumbnails(racingGames),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
