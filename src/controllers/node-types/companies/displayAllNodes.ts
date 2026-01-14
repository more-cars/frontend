import express from "express"
import {CompanyModelFacade} from "../../../models/CompanyModelFacade"
import {getPrimaryProperties} from "../../../models/node-types/getPrimaryProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const companies = await CompanyModelFacade.getAllNodes()

    return res.render('templates/companies/companies-page', {
        pageTitle: 'All Companies',
        nodeCollection: companies,
        primaryProperties: getPrimaryProperties(DataNodeType.COMPANY),
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
