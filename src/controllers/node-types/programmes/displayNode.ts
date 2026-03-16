import express from "express"
import {ProgrammeModelFacade} from "../../../models/ProgrammeModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const programmeId = parseInt(req.params.id)
    const programme = await ProgrammeModelFacade.getNodeById(programmeId)

    if (!programme) {
        return res.render('templates/node-types/programmes/programme-not-found-page', {
            page_title: `Programme not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    res.render('templates/node-types/programmes/programme-detail-page', {
        page_title: `${programme.name} - Programme`,
        node: {
            type: ControllerNodeType.PROGRAMME,
            data: programme,
            node_properties: getNodeProperties(DataNodeType.PROGRAMME),
            main_image: await ProgrammeModelFacade.getConnectedMainImage(programmeId),
        },
        relationships: {
        },
    })
}
