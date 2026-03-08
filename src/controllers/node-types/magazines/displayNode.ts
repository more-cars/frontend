import express from "express"
import {MagazineModelFacade} from "../../../models/MagazineModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const magazineId = parseInt(req.params.id)
    const magazine = await MagazineModelFacade.getNodeById(magazineId)

    if (!magazine) {
        return res.render('templates/node-types/magazines/magazine-not-found-page', {
            page_title: `Magazine not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    res.render('templates/node-types/magazines/magazine-detail-page', {
        page_title: `${magazine.name} - Magazine`,
        node: {
            type: ControllerNodeType.MAGAZINE,
            data: magazine,
            node_properties: getNodeProperties(DataNodeType.MAGAZINE),
            main_image: await MagazineModelFacade.getConnectedMainImage(magazineId),
        },
        relationships: {},
    })
}
