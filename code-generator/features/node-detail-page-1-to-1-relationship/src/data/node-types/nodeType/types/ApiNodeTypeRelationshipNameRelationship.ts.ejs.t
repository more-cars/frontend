---
to: src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/Api<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship.ts
---
import type {Api<%= h.changeCase.pascal(partnerNodeType) %>Node} from "../../<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>/types/Api<%= h.changeCase.pascal(partnerNodeType) %>Node"

export type Api<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship = {
    data: {
        relationship_id: number
        relationship_name: '<%= h.changeCase.kebab(relationshipName) %>'
        relationship_partner: {
            node_type: '<%= h.changeCase.lower(partnerNodeType) %>'
            data: Api<%= h.changeCase.pascal(partnerNodeType) %>Node['data']
        }
        created_at: string
        updated_at: string
    }
}
