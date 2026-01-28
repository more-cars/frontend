---
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayAllNodes.ts
---
import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {<%= h.changeCase.pascal(nodeType) %>ModelFacade} from "../../../models/<%= h.changeCase.pascal(nodeType) %>ModelFacade"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const <%= h.changeCase.camel(h.inflection.pluralize(nodeType)) %> = await <%= h.changeCase.pascal(nodeType) %>ModelFacade.getAllNodes({page})

    res.render('templates/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>-page', {
        pageTitle: 'All <%= h.changeCase.title(h.inflection.pluralize(nodeType)) %>',
        nodeCollection: <%= h.changeCase.camel(h.inflection.pluralize(nodeType)) %>,
        node_properties: getNodeProperties(DataNodeType.<%= h.changeCase.constant(nodeType) %>),
        pagination: {
            page,
            total: 101,
        },
    })
}
