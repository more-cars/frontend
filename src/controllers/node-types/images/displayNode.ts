import express from "express"
import {ImageModelFacade} from "../../../models/ImageModelFacade"
import {getPrimaryProperties} from "../../../models/node-types/getPrimaryProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const imageId = parseInt(req.params.id)
    const image = await ImageModelFacade.getNodeById(imageId)

    if (!image) {
        return res.render('templates/images/image-not-found-page', {
            pageTitle: `Image not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    res.render('templates/images/image-page', {
        pageTitle: `${image.name} - Image`,
        node: image,
        relationships: {
            brands: {
                items: await ImageModelFacade.getConnectedBrands(imageId),
                primary_properties: getPrimaryProperties(DataNodeType.BRAND),
            },
            car_models: {
                items: await ImageModelFacade.getConnectedCarModels(imageId),
                primary_properties: getPrimaryProperties(DataNodeType.CAR_MODEL),
            },
        },
        primaryProperties: getPrimaryProperties(DataNodeType.IMAGE),
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
