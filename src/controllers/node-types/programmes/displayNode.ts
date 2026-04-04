import express from "express"
import {ProgrammeModelFacade} from "../../../models/ProgrammeModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const programmeId = parseInt(req.params.id)
    const programme = await ProgrammeModelFacade.getNodeById(programmeId)

    if (!programme) {
        return sendResponse404(res)
    }

    const programmeEpisodes = await ProgrammeModelFacade.getConnectedProgrammeEpisodes(programmeId)
    const images = await ProgrammeModelFacade.getConnectedImages(programmeId)

    res.render('templates/node-types/programmes/programme-detail-page', {
        page_title: `${programme.fields.name} - Programme`,
        node: {
            type: ControllerNodeType.PROGRAMME,
            data: programme,
            title: ProgrammeModelFacade.getNodeTitle(programme),
            sub_title: ProgrammeModelFacade.getNodeSubTitle(programme),
            node_properties: getNodeProperties(DataNodeType.PROGRAMME),
            main_image: await ProgrammeModelFacade.getConnectedMainImage(programmeId),
        },
        relationships: {
            programme_episodes: {
                items: programmeEpisodes,
                node_properties: getNodeProperties(DataNodeType.PROGRAMME_EPISODE),
                thumbnails: await getNodeThumbnails(programmeEpisodes),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
