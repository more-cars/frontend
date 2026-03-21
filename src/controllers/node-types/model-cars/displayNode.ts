import express from "express"
import {ModelCarModelFacade} from "../../../models/ModelCarModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const modelCarId = parseInt(req.params.id)
    const modelCar = await ModelCarModelFacade.getNodeById(modelCarId)

    if (!modelCar) {
        return res.render('templates/node-types/model-cars/model-car-not-found-page', {
            page_title: `Model Car not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    res.render('templates/node-types/model-cars/model-car-detail-page', {
        page_title: `${modelCar.name} - Model Car`,
        node: {
            type: ControllerNodeType.MODEL_CAR,
            data: modelCar,
            node_properties: getNodeProperties(DataNodeType.MODEL_CAR),
        },
        relationships: {
        },
    })
}
