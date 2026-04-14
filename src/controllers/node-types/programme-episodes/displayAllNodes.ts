import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {ProgrammeEpisodeModelFacade} from "../../../models/ProgrammeEpisodeModelFacade"
import {getAllNodeTitles} from "../../lib/getAllNodeTitles"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const programmeEpisodes = await ProgrammeEpisodeModelFacade.getAllNodes({page})

    res.render('templates/node-types/programme-episodes/programme-episode-overview-page', {
        page_title: 'All Programme Episodes',
        main_headline: 'All Programme Episodes',
        node_type: ControllerNodeType.PROGRAMME_EPISODE,
        node_collection: programmeEpisodes,
        node_titles: getAllNodeTitles(programmeEpisodes, ProgrammeEpisodeModelFacade.getNodeTitle),
        thumbnails: await getNodeThumbnails(programmeEpisodes),
        node_properties: getNodeProperties(DataNodeType.PROGRAMME_EPISODE),
        pagination: {
            page,
            total: await ProgrammeEpisodeModelFacade.getTotalNodeCount(),
        },
    })
}
