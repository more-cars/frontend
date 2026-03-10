---
to: src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/Api<%= h.changeCase.pascal(nodeType) %>HasPrimeImageRelationship.ts
---
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiImageNode} from "../../images/types/ApiImageNode"

export type Api<%= h.changeCase.pascal(nodeType) %>HasPrimeImageRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-prime-image'
        partner_node: {
            node_type: ApiNodeType.IMAGE
            data: ApiImageNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
