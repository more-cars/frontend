import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ModelCarNode} from "./ModelCarNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {VideoNode} from "../../videos/types/VideoNode"

export type ModelCarHasVideoRelationship = {
    id: number
    name: DataRelationshipType.MODEL_CAR_HAS_VIDEO
    source_node: ModelCarNode
    source_node_type: DataNodeType.MODEL_CAR
    partner_node: VideoNode
    partner_node_type: DataNodeType.VIDEO
    created_at: string
    updated_at: string
}
