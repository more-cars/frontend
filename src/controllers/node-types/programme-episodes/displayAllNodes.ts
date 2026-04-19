import express from "express"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {ProgrammeEpisodeModelFacade} from "../../../models/ProgrammeEpisodeModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"
import {sendResponse400} from "../../responses/sendResponse400"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    let searchParams
    try {
        searchParams = determineSearchParams(req, ControllerNodeType.PROGRAMME_EPISODE)
    } catch (error) {
        console.error(error)
        return sendResponse400(res)
    }

    const programmeEpisodes = await ProgrammeEpisodeModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/programme-episodes/programme-episode-overview-page', {
        page_title: 'All Programme Episodes',
        main_headline: 'All Programme Episodes',
        node_type: ControllerNodeType.PROGRAMME_EPISODE,
        node_collection: programmeEpisodes,
        thumbnails: await getNodeThumbnails(programmeEpisodes),
        node_properties: getNodeProperties(ControllerNodeType.PROGRAMME_EPISODE),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await ProgrammeEpisodeModelFacade.getTotalNodeCount(),
        },
    })
}
