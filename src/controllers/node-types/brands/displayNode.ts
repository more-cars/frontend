import express from "express"
import {BrandModelFacade} from "../../../models/BrandModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getCarModelThumbnails} from "../car-models/getCarModelThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const brandId = parseInt(req.params.id)
    const brand = await BrandModelFacade.getNodeById(brandId)

    if (!brand) {
        return res.render('templates/brands/brand-not-found-page', {
            pageTitle: `Brand not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const carModels = await BrandModelFacade.getConnectedCarModels(brandId)

    return res.render('templates/brands/brand-page', {
        pageTitle: `${brand.name} - Brand`,
        node: {
            data: brand,
            node_properties: getNodeProperties(DataNodeType.BRAND),
            main_image: await BrandModelFacade.getConnectedMainImage(brandId),
        },
        relationships: {
            car_models: {
                items: carModels,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL),
                thumbnails: await getCarModelThumbnails(carModels),
            },
            images: {
                items: await BrandModelFacade.getConnectedImages(brandId),
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
