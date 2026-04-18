import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {RacingGameModelFacade} from "../../../models/RacingGameModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const racingGames = await RacingGameModelFacade.getAllNodes({page})

    res.render('templates/node-types/racing-games/racing-game-overview-page', {
        page_title: 'All Racing Games',
        main_headline: 'All Racing Games',
        node_type: ControllerNodeType.RACING_GAME,
        node_collection: racingGames,
        thumbnails: await getNodeThumbnails(racingGames),
        node_properties: getNodeProperties(ControllerNodeType.RACING_GAME),
        pagination: {
            page,
            total: await RacingGameModelFacade.getTotalNodeCount(),
        },
    })
}
