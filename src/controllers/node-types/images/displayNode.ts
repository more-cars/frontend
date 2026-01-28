import express from "express"
import {ImageModelFacade} from "../../../models/ImageModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getBrandThumbnails} from "../brands/getBrandThumbnails"
import {getCarModelThumbnails} from "../car-models/getCarModelThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const imageId = parseInt(req.params.id)
    const image = await ImageModelFacade.getNodeById(imageId)

    if (!image) {
        return res.render('templates/node-types/images/image-not-found-page', {
            page_title: `Image not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const brands = await ImageModelFacade.getConnectedBrands(imageId)
    const carModels = await ImageModelFacade.getConnectedCarModels(imageId)

    res.render('templates/node-types/images/image-detail-page', {
        page_title: `${image.name} - Image`,
        node: {
            data: image,
            node_properties: getNodeProperties(DataNodeType.IMAGE),
            main_image: image,
        },
        relationships: {
            brands: {
                items: brands,
                node_properties: getNodeProperties(DataNodeType.BRAND),
                thumbnails: await getBrandThumbnails(brands),
            },
            car_models: {
                items: carModels,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL),
                thumbnails: await getCarModelThumbnails(carModels),
            },
        },
    })
}
