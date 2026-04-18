import express from "express"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {RacingGameModelFacade} from "../../../models/RacingGameModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const searchParams = determineSearchParams(req)
    const racingGames = await RacingGameModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/racing-games/racing-game-overview-page', {
        page_title: 'All Racing Games',
        main_headline: 'All Racing Games',
        node_type: ControllerNodeType.RACING_GAME,
        node_collection: racingGames,
        thumbnails: await getNodeThumbnails(racingGames),
        node_properties: getNodeProperties(ControllerNodeType.RACING_GAME),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await RacingGameModelFacade.getTotalNodeCount(),
        },
    })
}
