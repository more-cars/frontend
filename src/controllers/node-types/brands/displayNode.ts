import express from "express"
import {BrandModelFacade} from "../../../models/BrandModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getVideoThumbnails} from "../videos/getVideoThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const brandId = parseInt(req.params.id)
    const brand = await BrandModelFacade.getNodeById(brandId)

    if (!brand) {
        return sendResponse404(res)
    }

    const company = await BrandModelFacade.getConnectedCompany(brandId)
    const carModels = await BrandModelFacade.getConnectedCarModels(brandId)
    const images = await BrandModelFacade.getConnectedImages(brandId)
    const videos = await BrandModelFacade.getConnectedVideos(brandId)

    res.render('templates/node-types/brands/brand-detail-page', {
        page_title: `${brand.fields.name} - Brand`,
        node: {
            data: brand,
            title: BrandModelFacade.getNodeTitle(brand),
            sub_title: BrandModelFacade.getNodeSubTitle(brand),
            node_properties: getNodeProperties(ControllerNodeType.BRAND),
            main_image: await BrandModelFacade.getConnectedMainImage(brandId),
        },
        relationships: {
            company: {
                item: company,
                node_properties: getNodeProperties(ControllerNodeType.COMPANY),
                thumbnails: await getNodeThumbnails(company ? [company] : []),
            },
            car_models: {
                items: carModels,
                node_properties: getNodeProperties(ControllerNodeType.CAR_MODEL),
                thumbnails: await getNodeThumbnails(carModels),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(ControllerNodeType.IMAGE),
                thumbnails: await getNodeThumbnails(images),
            },
            videos: {
                items: videos,
                node_properties: getNodeProperties(ControllerNodeType.VIDEO),
                thumbnails: await getVideoThumbnails(videos),
            },
        },
    })
}
