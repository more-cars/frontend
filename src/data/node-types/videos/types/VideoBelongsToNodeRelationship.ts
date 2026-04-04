import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {VideoNode} from "./VideoNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {DataNode} from "../../../types/DataNode"

export type VideoBelongsToNodeRelationship = {
    id: number
    name: DataRelationshipType.VIDEO_BELONGS_TO_NODE
    source_node: VideoNode
    source_node_type: DataNodeType.VIDEO
    partner_node: DataNode
    partner_node_type: DataNodeType
    created_at: string
    updated_at: string
}
