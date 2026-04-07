import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingEventNode} from "./RacingEventNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type RacingEventHasVideoRelationship = {
    id: number
    name: DataRelationshipType.RACING_EVENT_HAS_VIDEO
    source_node: RacingEventNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
