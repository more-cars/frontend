import express from "express"
import {CompanyModelFacade} from "../../../models/CompanyModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
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
            primary_properties: getNodeProperties(DataNodeType.COMPANY),
            main_image: await CompanyModelFacade.getConnectedMainImage(companyId),
        },
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
