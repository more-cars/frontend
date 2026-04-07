import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {VideoNode} from "./VideoNode"
import type {DataNode} from "../../../types/DataNode"

export type VideoBelongsToNodeRelationship = {
    id: number
    name: DataRelationshipType.VIDEO_BELONGS_TO_NODE
    source_node: VideoNode
    partner_node: DataNode
    created_at: string
    updated_at: string
}
