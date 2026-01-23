import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {CompanyModelFacade} from "../../../models/CompanyModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getCompanyThumbnails} from "./getCompanyThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const companies = await CompanyModelFacade.getAllNodes({page})

    return res.render('templates/companies/companies-page', {
        pageTitle: 'All Companies',
        nodeCollection: companies,
        thumbnails: await getCompanyThumbnails(companies),
        primary_properties: getNodeProperties(DataNodeType.COMPANY),
        pagination: {
            page,
            total: 114,
        },
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}


