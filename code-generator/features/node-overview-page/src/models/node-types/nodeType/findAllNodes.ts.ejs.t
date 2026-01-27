---
to: src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findAllNodes.ts
---
import {<%= h.changeCase.pascal(nodeType) %>DataFacade} from "../../../data/<%= h.changeCase.pascal(nodeType) %>DataFacade"
import {<%= h.changeCase.pascal(nodeType) %>} from "./types/<%= h.changeCase.pascal(nodeType) %>"
import {convert<%= h.changeCase.pascal(nodeType) %>Node} from "./convert<%= h.changeCase.pascal(nodeType) %>Node"

const nodeLimit = 100

export async function findAllNodes(params?: { page: number }) {
    const nodes = await <%= h.changeCase.pascal(nodeType) %>DataFacade.getNodeCollection(params)

    const <%= h.changeCase.camel(h.inflection.pluralize(nodeType)) %>: <%= h.changeCase.pascal(nodeType) %>[] = []

    nodes.forEach(node => {
        <%= h.changeCase.camel(h.inflection.pluralize(nodeType)) %>.push(convert<%= h.changeCase.pascal(nodeType) %>Node(node))
    })

    return <%= h.changeCase.camel(h.inflection.pluralize(nodeType)) %>.slice(0, nodeLimit)
}
