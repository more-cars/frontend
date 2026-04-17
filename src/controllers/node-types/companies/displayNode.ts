import express from "express"
import {CompanyModelFacade} from "../../../models/CompanyModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {getVideoThumbnails} from "../videos/getVideoThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const companyId = parseInt(req.params.id)
    const company = await CompanyModelFacade.getNodeById(companyId)

    if (!company) {
        return sendResponse404(res)
    }

    const brands = await CompanyModelFacade.getConnectedBrands(companyId)
    const images = await CompanyModelFacade.getConnectedImages(companyId)
    const videos = await CompanyModelFacade.getConnectedVideos(companyId)

    res.render('templates/node-types/companies/company-detail-page', {
        page_title: `${company.fields.name} - Company`,
        node: {
            data: company,
            title: CompanyModelFacade.getNodeTitle(company),
            sub_title: CompanyModelFacade.getNodeSubTitle(company),
            node_properties: getNodeProperties(DataNodeType.COMPANY),
            main_image: await CompanyModelFacade.getConnectedMainImage(companyId),
        },
        relationships: {
            brands: {
                items: brands,
                node_properties: getNodeProperties(DataNodeType.BRAND),
                thumbnails: await getNodeThumbnails(brands),
                oldestBrand: brands
                    .filter(brand => brand.fields.founded)
                    .toSorted((a, b) => (b.fields.founded || 0) - (a.fields.founded || 0))
                    .pop(),
                newestBrand: brands
                    .filter(brand => brand.fields.founded)
                    .toSorted((a, b) => (a.fields.founded || 0) - (b.fields.founded || 0))
                    .pop(),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
            videos: {
                items: videos,
                node_properties: getNodeProperties(DataNodeType.VIDEO),
                thumbnails: await getVideoThumbnails(videos),
            },
        },
    })
}
