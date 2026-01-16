import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {CompanyModelFacade} from "../../../models/CompanyModelFacade"
import {getPrimaryProperties} from "../../../models/node-types/getPrimaryProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const companies = await CompanyModelFacade.getAllNodes({page})

    return res.render('templates/companies/companies-page', {
        pageTitle: 'All Companies',
        nodeCollection: companies,
        primaryProperties: getPrimaryProperties(DataNodeType.COMPANY),
        pagination: {
            page,
            total: 114,
        },
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
