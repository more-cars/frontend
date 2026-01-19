import express from "express"
import {CompanyModelFacade} from "../../../models/CompanyModelFacade"
import {getPrimaryProperties} from "../../../models/node-types/getPrimaryProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const companyId = parseInt(req.params.id)
    const company = await CompanyModelFacade.getNodeById(companyId)

    if (!company) {
        return res.render('templates/companies/company-not-found-page', {
            pageTitle: `Company not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    return res.render('templates/companies/company-page', {
        pageTitle: `${company.name} - Company`,
        node: {
            data: company,
            primaryProperties: getPrimaryProperties(DataNodeType.COMPANY),
        },
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
