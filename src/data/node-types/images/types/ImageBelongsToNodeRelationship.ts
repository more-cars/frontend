import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ImageNode} from "./ImageNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {DataNode} from "../../../types/DataNode"

export type ImageBelongsToNodeRelationship = {
    id: number
    name: DataRelationshipType.IMAGE_BELONGS_TO_NODE
    source_node: ImageNode
    source_node_type: DataNodeType.IMAGE
    partner_node: DataNode
    partner_node_type: DataNodeType
    created_at: string
    updated_at: string
}
