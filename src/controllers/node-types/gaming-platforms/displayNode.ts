import express from "express"
import {GamingPlatformModelFacade} from "../../../models/GamingPlatformModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getVideoThumbnails} from "../videos/getVideoThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const gamingPlatformId = parseInt(req.params.id)
    const gamingPlatform = await GamingPlatformModelFacade.getNodeById(gamingPlatformId)

    if (!gamingPlatform) {
        return sendResponse404(res)
    }

    const racingGames = await GamingPlatformModelFacade.getConnectedRacingGames(gamingPlatformId)
    const images = await GamingPlatformModelFacade.getConnectedImages(gamingPlatformId)
    const videos = await GamingPlatformModelFacade.getConnectedVideos(gamingPlatformId)

    res.render('templates/node-types/gaming-platforms/gaming-platform-detail-page', {
        page_title: `${gamingPlatform.fields.name} - Gaming Platform`,
        node: {
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
                thumbnails: await getNodeThumbnails(racingGames),
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
