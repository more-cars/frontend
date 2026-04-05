import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {LapTimeNode} from "./LapTimeNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {VideoNode} from "../../videos/types/VideoNode"

export type LapTimeHasVideoRelationship = {
    id: number
    name: DataRelationshipType.LAP_TIME_HAS_VIDEO
    source_node: LapTimeNode
    source_node_type: DataNodeType.LAP_TIME
    partner_node: VideoNode
    partner_node_type: DataNodeType.VIDEO
    created_at: string
    updated_at: string
}
