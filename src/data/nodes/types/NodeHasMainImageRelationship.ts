import {DataRelationshipType} from "../../types/DataRelationshipType"
import type {ImageNode} from "../../node-types/images/types/ImageNode"
import type {Node} from "./Node"
import type {DataNodeType} from "../../types/DataNodeType"

export type NodeHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.NODE_HAS_MAIN_IMAGE
    source_node: Node
    source_node_type: DataNodeType
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
