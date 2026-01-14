---
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayAllNodes.ts
---
import express from "express"
import {<%= h.changeCase.pascal(nodeType) %>ModelFacade} from "../../../models/<%= h.changeCase.pascal(nodeType) %>ModelFacade"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const <%= h.changeCase.camel(h.inflection.pluralize(nodeType)) %> = await <%= h.changeCase.pascal(nodeType) %>ModelFacade.getAllNodes()

    return res.render('templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>-page', {
        pageTitle: 'All <%= h.changeCase.title(h.inflection.pluralize(nodeType)) %>',
        nodeCollection: <%= h.changeCase.camel(h.inflection.pluralize(nodeType)) %>,
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
