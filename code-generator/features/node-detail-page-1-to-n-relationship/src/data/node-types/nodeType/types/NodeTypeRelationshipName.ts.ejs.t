---
to: src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship.ts
---
import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {<%= h.changeCase.pascal(nodeType) %>Node} from "./<%= h.changeCase.pascal(nodeType) %>Node"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {<%= h.changeCase.pascal(partnerNodeType) %>Node} from "../../<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>/types/<%= h.changeCase.pascal(partnerNodeType) %>Node"

export type <%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship = {
    id: number
    name: DataRelationshipType.<%= h.changeCase.constant(nodeType) %>_<%= h.changeCase.constant(relationshipName) %>
    source_node: <%= h.changeCase.pascal(nodeType) %>Node
    source_node_type: DataNodeType.<%= h.changeCase.constant(nodeType) %>
    partner_node: <%= h.changeCase.pascal(partnerNodeType) %>Node
    partner_node_type: DataNodeType.<%= h.changeCase.constant(partnerNodeType) %>
    created_at: string
    updated_at: string
}
