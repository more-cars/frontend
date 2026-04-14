---
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayNode.ts
---
import express from "express"
import {<%= h.changeCase.pascal(nodeType) %>ModelFacade} from "../../../models/<%= h.changeCase.pascal(nodeType) %>ModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"

export async function displayNode(req: express.Request, res: express.Response) {
    const <%= h.changeCase.camel(nodeType) %>Id = parseInt(req.params.id)
    const <%= h.changeCase.camel(nodeType) %> = await <%= h.changeCase.pascal(nodeType) %>ModelFacade.getNodeById(<%= h.changeCase.camel(nodeType) %>Id)

    if (!<%= h.changeCase.camel(nodeType) %>) {
        return sendResponse404(res)
    }

    res.render('templates/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-detail-page', {
        page_title: `${<%= h.changeCase.camel(nodeType) %>.fields.name} - <%= h.changeCase.title(nodeType) %>`,
        node: {
            type: ControllerNodeType.<%= h.changeCase.constant(nodeType) %>,
            data: <%= h.changeCase.camel(nodeType) %>,
            title: <%= h.changeCase.pascal(nodeType) %>ModelFacade.getNodeTitle(<%= h.changeCase.camel(nodeType) %>),
            sub_title: <%= h.changeCase.pascal(nodeType) %>ModelFacade.getNodeSubTitle(<%= h.changeCase.camel(nodeType) %>),
            node_properties: getNodeProperties(DataNodeType.<%= h.changeCase.constant(nodeType) %>),
        },
        relationships: {
        },
    })
}
