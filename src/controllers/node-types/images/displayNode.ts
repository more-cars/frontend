import express from "express"
import {ImageModelFacade} from "../../../models/ImageModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
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
        node: {
            data: image,
            primary_properties: getNodeProperties(DataNodeType.IMAGE),
            main_image: image,
        },
        relationships: {
            brands: {
                items: await ImageModelFacade.getConnectedBrands(imageId),
                primary_properties: getNodeProperties(DataNodeType.BRAND),
            },
            car_models: {
                items: await ImageModelFacade.getConnectedCarModels(imageId),
                primary_properties: getNodeProperties(DataNodeType.CAR_MODEL),
            },
        },
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
