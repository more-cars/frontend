import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RaceTrackNode} from "./RaceTrackNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type RaceTrackHasVideoRelationship = {
    id: number
    name: DataRelationshipType.RACE_TRACK_HAS_VIDEO
    source_node: RaceTrackNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
