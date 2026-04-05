import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingEventNode} from "./RacingEventNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {VideoNode} from "../../videos/types/VideoNode"

export type RacingEventHasVideoRelationship = {
    id: number
    name: DataRelationshipType.RACING_EVENT_HAS_VIDEO
    source_node: RacingEventNode
    source_node_type: DataNodeType.RACING_EVENT
    partner_node: VideoNode
    partner_node_type: DataNodeType.VIDEO
    created_at: string
    updated_at: string
}
