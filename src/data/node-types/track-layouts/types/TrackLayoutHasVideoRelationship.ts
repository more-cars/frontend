import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {TrackLayoutNode} from "./TrackLayoutNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type TrackLayoutHasVideoRelationship = {
    id: number
    name: DataRelationshipType.TRACK_LAYOUT_HAS_VIDEO
    source_node: TrackLayoutNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
