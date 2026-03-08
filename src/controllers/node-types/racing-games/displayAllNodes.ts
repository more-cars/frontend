import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {RacingGameModelFacade} from "../../../models/RacingGameModelFacade"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const racingGames = await RacingGameModelFacade.getAllNodes({page})

    res.render('templates/node-types/racing-games/racing-game-overview-page', {
        page_title: 'All Racing Games',
        main_headline: 'All Racing Games',
        node_collection: racingGames,
        node_properties: getNodeProperties(DataNodeType.RACING_GAME),
        pagination: {
            page,
            total: await RacingGameModelFacade.getTotalNodeCount(),
        },
    })
}
