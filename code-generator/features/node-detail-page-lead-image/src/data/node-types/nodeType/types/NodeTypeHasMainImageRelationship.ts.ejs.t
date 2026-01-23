---
to: src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/<%= h.changeCase.pascal(nodeType) %>HasMainImageRelationship.ts
---
import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {<%= h.changeCase.pascal(nodeType) %>Node} from "./<%= h.changeCase.pascal(nodeType) %>Node"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type <%= h.changeCase.pascal(nodeType) %>HasMainImageRelationship = {
    id: number
    name: DataRelationshipType.<%= h.changeCase.constant(nodeType) %>_HAS_MAIN_IMAGE
    source_node: <%= h.changeCase.pascal(nodeType) %>Node
    source_node_type: DataNodeType.<%= h.changeCase.constant(nodeType) %>
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
