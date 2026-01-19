---
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayNode.ts
---
import express from "express"
import {<%= h.changeCase.pascal(nodeType) %>ModelFacade} from "../../../models/<%= h.changeCase.pascal(nodeType) %>ModelFacade"
import {getPrimaryProperties} from "../../../models/node-types/getPrimaryProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const <%= h.changeCase.camel(nodeType) %>Id = parseInt(req.params.id)
    const <%= h.changeCase.camel(nodeType) %> = await <%= h.changeCase.pascal(nodeType) %>ModelFacade.getNodeById(<%= h.changeCase.camel(nodeType) %>Id)

    if (!<%= h.changeCase.camel(nodeType) %>) {
        return res.render('templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-not-found-page', {
            pageTitle: `<%= h.changeCase.title(nodeType) %> not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    return res.render('templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-page', {
        pageTitle: `${<%= h.changeCase.camel(nodeType) %>.name} - <%= h.changeCase.title(nodeType) %>`,
        node: {
            data: <%= h.changeCase.camel(nodeType) %>,
            primaryProperties: getPrimaryProperties(DataNodeType.<%= h.changeCase.constant(nodeType) %>),
        },
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
