import {DataRelationshipType} from "../../types/DataRelationshipType"
import type {ImageNode} from "../../node-types/images/types/ImageNode"
import type {Node} from "./Node"

export type NodeHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.NODE_HAS_MAIN_IMAGE
    source_node: Node
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
