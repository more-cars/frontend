import express from "express"
import {ProgrammeEpisodeModelFacade} from "../../../models/ProgrammeEpisodeModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

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

    res.render('templates/node-types/programme-episodes/programme-episode-detail-page', {
        page_title: `${programmeEpisode.title} - Programme Episode`,
        main_headline: `${programmeEpisode.title}`,
        node: {
            type: ControllerNodeType.PROGRAMME_EPISODE,
            data: programmeEpisode,
            node_properties: getNodeProperties(DataNodeType.PROGRAMME_EPISODE),
        },
        relationships: {},
    })
}
