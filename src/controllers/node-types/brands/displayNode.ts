import express from "express"
import {BrandModelFacade} from "../../../models/BrandModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

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

    return res.render('templates/brands/brand-page', {
        pageTitle: `${brand.name} - Brand`,
        node: {
            data: brand,
            primary_properties: getNodeProperties(DataNodeType.BRAND),
            main_image: await BrandModelFacade.getConnectedMainImage(brandId),
        },
        relationships: {
            car_models: {
                items: await BrandModelFacade.getConnectedCarModels(brandId),
                primary_properties: getNodeProperties(DataNodeType.CAR_MODEL),
            },
            images: {
                items: await BrandModelFacade.getConnectedImages(brandId),
                primary_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
