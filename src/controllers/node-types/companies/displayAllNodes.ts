import express from "express"
import {CompanyModelFacade} from "../../../models/CompanyModelFacade"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const companies = await CompanyModelFacade.getAllNodes()

    return res.render('templates/companies/companies-page', {
        pageTitle: 'All Companies',
        nodeCollection: companies,
        primaryProperties: getPrimaryProperties(),
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}

function getPrimaryProperties() {
    const properties: Array<Object> = require(`../../../data/node-types/companies/properties.json`)
    const primaryProperties = properties.filter((prop: any) => prop.is_primary)

    return primaryProperties.map((prop: any) => prop.name)
}
