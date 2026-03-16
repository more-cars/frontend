---
to: src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/Api<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship.ts
---
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {Api<%= h.changeCase.pascal(partnerNodeType) %>Node} from "../../<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>/types/Api<%= h.changeCase.pascal(partnerNodeType) %>Node"

export type Api<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.<%= h.changeCase.constant(nodeType) %>_<%= h.changeCase.constant(relationshipName) %>
        partner_node: {
            ApiNodeType.<%= h.changeCase.constant(partnerNodeType) %>
            data: Api<%= h.changeCase.pascal(partnerNodeType) %>Node['attributes']
        }
        created_at: string
        updated_at: string
    }
}
