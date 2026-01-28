import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {CompanyModelFacade} from "../../../models/CompanyModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getCompanyThumbnails} from "./getCompanyThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const companies = await CompanyModelFacade.getAllNodes({page})

    res.render('templates/node-types/companies/companies-page', {
        page_title: 'All Companies',
        main_headline: 'All Companies',
        node_collection: companies,
        thumbnails: await getCompanyThumbnails(companies),
        node_properties: getNodeProperties(DataNodeType.COMPANY),
        pagination: {
            page,
            total: 114,
        },
    })
}


