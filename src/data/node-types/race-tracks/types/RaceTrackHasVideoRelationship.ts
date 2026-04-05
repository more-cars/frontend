import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RaceTrackNode} from "./RaceTrackNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {VideoNode} from "../../videos/types/VideoNode"

export type RaceTrackHasVideoRelationship = {
    id: number
    name: DataRelationshipType.RACE_TRACK_HAS_VIDEO
    source_node: RaceTrackNode
    source_node_type: DataNodeType.RACE_TRACK
    partner_node: VideoNode
    partner_node_type: DataNodeType.VIDEO
    created_at: string
    updated_at: string
}
