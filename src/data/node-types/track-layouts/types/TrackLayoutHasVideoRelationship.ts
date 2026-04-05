import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {TrackLayoutNode} from "./TrackLayoutNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {VideoNode} from "../../videos/types/VideoNode"

export type TrackLayoutHasVideoRelationship = {
    id: number
    name: DataRelationshipType.TRACK_LAYOUT_HAS_VIDEO
    source_node: TrackLayoutNode
    source_node_type: DataNodeType.TRACK_LAYOUT
    partner_node: VideoNode
    partner_node_type: DataNodeType.VIDEO
    created_at: string
    updated_at: string
}
