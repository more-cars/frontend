---
to: src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>.ts
---
import {<%= h.changeCase.pascal(nodeType) %>DataFacade} from "../../../data/<%= h.changeCase.pascal(nodeType) %>DataFacade"
import {convert<%= h.changeCase.pascal(partnerNodeType) %>Node} from "../<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>/convert<%= h.changeCase.pascal(partnerNodeType) %>Node"
import {<%= h.changeCase.pascal(partnerNodeType) %>} from "../<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>/types/<%= h.changeCase.pascal(partnerNodeType) %>"

export async function findConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>(id: number) {
    const relations = await <%= h.changeCase.pascal(nodeType) %>DataFacade.getConnected<%= h.changeCase.pascal(partnerNodeType) %>Nodes(id)
    const <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>: <%= h.changeCase.pascal(partnerNodeType) %>[] = []

    for (const relation of relations) {
        <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>.push(convert<%= h.changeCase.pascal(partnerNodeType) %>Node(relation.partner_node))
    }

    return <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>
}
