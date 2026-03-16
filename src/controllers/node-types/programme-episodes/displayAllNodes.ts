import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {ProgrammeEpisodeModelFacade} from "../../../models/ProgrammeEpisodeModelFacade"
import {getProgrammeEpisodeThumbnails} from "./getProgrammeEpisodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const programmeEpisodes = await ProgrammeEpisodeModelFacade.getAllNodes({page})

    res.render('templates/node-types/programme-episodes/programme-episode-overview-page', {
        page_title: 'All Programme Episodes',
        main_headline: 'All Programme Episodes',
        node_collection: programmeEpisodes,
        thumbnails: await getProgrammeEpisodeThumbnails(programmeEpisodes),
        node_properties: getNodeProperties(DataNodeType.PROGRAMME_EPISODE),
        pagination: {
            page,
            total: await ProgrammeEpisodeModelFacade.getTotalNodeCount(),
        },
    })
}
