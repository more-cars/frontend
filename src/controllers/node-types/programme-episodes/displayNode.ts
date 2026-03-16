import express from "express"
import {ProgrammeEpisodeModelFacade} from "../../../models/ProgrammeEpisodeModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getProgrammeThumbnails} from "../programmes/getProgrammeThumbnails"
import {getProgrammeEpisodeThumbnails} from "./getProgrammeEpisodeThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const programmeEpisodeId = parseInt(req.params.id)
    const programmeEpisode = await ProgrammeEpisodeModelFacade.getNodeById(programmeEpisodeId)

    if (!programmeEpisode) {
        return res.render('templates/node-types/programme-episodes/programme-episode-not-found-page', {
            page_title: `Programme Episode not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const programme = await ProgrammeEpisodeModelFacade.getConnectedProgramme(programmeEpisodeId)
    const predecessor = await ProgrammeEpisodeModelFacade.getConnectedPredecessor(programmeEpisodeId)
    const successor = await ProgrammeEpisodeModelFacade.getConnectedSuccessor(programmeEpisodeId)

    res.render('templates/node-types/programme-episodes/programme-episode-detail-page', {
        page_title: `${programmeEpisode.title} - Programme Episode`,
        main_headline: `${programmeEpisode.title}`,
        node: {
            type: ControllerNodeType.PROGRAMME_EPISODE,
            data: programmeEpisode,
            node_properties: getNodeProperties(DataNodeType.PROGRAMME_EPISODE),
            main_image: await ProgrammeEpisodeModelFacade.getConnectedMainImage(programmeEpisodeId),
        },
        relationships: {
            programme: {
                item: programme,
                node_properties: getNodeProperties(DataNodeType.PROGRAMME),
                thumbnails: await getProgrammeThumbnails(programme ? [programme] : []),
            },
            predecessor: {
                item: predecessor,
                node_properties: getNodeProperties(DataNodeType.PROGRAMME_EPISODE),
                thumbnails: await getProgrammeEpisodeThumbnails(predecessor ? [predecessor] : []),
            },
            successor: {
                item: successor,
                node_properties: getNodeProperties(DataNodeType.PROGRAMME_EPISODE),
                thumbnails: await getProgrammeEpisodeThumbnails(successor ? [successor] : []),
            },
        },
    })
}
