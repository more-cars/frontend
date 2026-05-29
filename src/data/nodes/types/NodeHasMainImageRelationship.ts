import {DataRelationshipType} from "../../types/DataRelationshipType"
import type {ImageNode} from "../../node-types/images/types/ImageNode"

export type NodeHasMainImageRelationship = {
    name: DataRelationshipType.NODE_HAS_MAIN_IMAGE
    source_node_id: number
    partner_node: ImageNode
}
