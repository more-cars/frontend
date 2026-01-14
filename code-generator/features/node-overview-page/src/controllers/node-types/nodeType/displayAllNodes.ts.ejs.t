---
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayAllNodes.ts
---
import express from "express"
import {getPrimaryProperties} from "../../../models/node-types/getPrimaryProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {<%= h.changeCase.pascal(nodeType) %>ModelFacade} from "../../../models/<%= h.changeCase.pascal(nodeType) %>ModelFacade"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const <%= h.changeCase.camel(h.inflection.pluralize(nodeType)) %> = await <%= h.changeCase.pascal(nodeType) %>ModelFacade.getAllNodes()

    return res.render('templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>-page', {
        pageTitle: 'All <%= h.changeCase.title(h.inflection.pluralize(nodeType)) %>',
        nodeCollection: <%= h.changeCase.camel(h.inflection.pluralize(nodeType)) %>,
        primaryProperties: getPrimaryProperties(DataNodeType.<%= h.changeCase.constant(nodeType) %>),
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
