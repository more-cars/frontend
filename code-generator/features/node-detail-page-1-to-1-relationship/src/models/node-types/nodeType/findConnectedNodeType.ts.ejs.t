---
to: src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findConnected<%= h.changeCase.pascal(partnerNodeType) %>.ts
---
import {<%= h.changeCase.pascal(nodeType) %>DataFacade} from "../../../data/<%= h.changeCase.pascal(nodeType) %>DataFacade"
import {convert<%= h.changeCase.pascal(partnerNodeType) %>Node} from "../<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>/convert<%= h.changeCase.pascal(partnerNodeType) %>Node"

export async function findConnected<%= h.changeCase.pascal(partnerNodeType) %>(id: number) {
    const relation = await <%= h.changeCase.pascal(nodeType) %>DataFacade.getConnected<%= h.changeCase.pascal(partnerNodeType) %>Node(id)

    if (!relation) {
        return null
    }

    return convert<%= h.changeCase.pascal(partnerNodeType) %>Node(relation.partner_node)
}
