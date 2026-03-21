import express from "express"
import {ModelCarBrandModelFacade} from "../../../models/ModelCarBrandModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const modelCarBrandId = parseInt(req.params.id)
    const modelCarBrand = await ModelCarBrandModelFacade.getNodeById(modelCarBrandId)

    if (!modelCarBrand) {
        return res.render('templates/node-types/model-car-brands/model-car-brand-not-found-page', {
            page_title: `Model Car Brand not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    res.render('templates/node-types/model-car-brands/model-car-brand-detail-page', {
        page_title: `${modelCarBrand.name} - Model Car Brand`,
        node: {
            type: ControllerNodeType.MODEL_CAR_BRAND,
            data: modelCarBrand,
            node_properties: getNodeProperties(DataNodeType.MODEL_CAR_BRAND),
        },
        relationships: {
        },
    })
}
