import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ImageNode} from "./ImageNode"
import type {DataNode} from "../../../types/DataNode"

export type ImageBelongsToNodeRelationship = {
    id: number
    name: DataRelationshipType.IMAGE_BELONGS_TO_NODE
    source_node: ImageNode
    partner_node: DataNode
    created_at: string
    updated_at: string
}
