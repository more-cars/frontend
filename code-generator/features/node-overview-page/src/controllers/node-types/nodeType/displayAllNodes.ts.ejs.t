---
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayAllNodes.ts
---
import express from "express"
import {determineSearchParams} from "../../lib/determineSearchParams"
import {<%= h.changeCase.pascal(nodeType) %>ModelFacade} from "../../../models/<%= h.changeCase.pascal(nodeType) %>ModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../specification/getNodeProperties"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const searchParams = determineSearchParams(req)
    const <%= h.changeCase.camel(h.inflection.pluralize(nodeType)) %> = await <%= h.changeCase.pascal(nodeType) %>ModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-overview-page', {
        page_title: 'All <%= h.changeCase.title(h.inflection.pluralize(nodeType)) %>',
        main_headline: 'All <%= h.changeCase.title(h.inflection.pluralize(nodeType)) %>',
        node_type: ControllerNodeType.<%= h.changeCase.constant(nodeType) %>,
        node_collection: <%= h.changeCase.camel(h.inflection.pluralize(nodeType)) %>,
        node_properties: getNodeProperties(ControllerNodeType.<%= h.changeCase.constant(nodeType) %>),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await <%= h.changeCase.pascal(nodeType) %>ModelFacade.getTotalNodeCount(),
        },
    })
}
