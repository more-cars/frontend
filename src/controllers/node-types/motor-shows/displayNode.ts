import express from "express"
import {MotorShowModelFacade} from "../../../models/MotorShowModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const motorShowId = parseInt(req.params.id)
    const motorShow = await MotorShowModelFacade.getNodeById(motorShowId)

    if (!motorShow) {
        return res.render('templates/node-types/motor-shows/motor-show-not-found-page', {
            page_title: `Motor Show not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    res.render('templates/node-types/motor-shows/motor-show-detail-page', {
        page_title: `${motorShow.name} - Motor Show`,
        node: {
            type: ControllerNodeType.MOTOR_SHOW,
            data: motorShow,
            node_properties: getNodeProperties(DataNodeType.MOTOR_SHOW),
        },
        relationships: {
        },
    })
}
