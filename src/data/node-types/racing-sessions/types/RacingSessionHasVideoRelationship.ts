import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingSessionNode} from "./RacingSessionNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type RacingSessionHasVideoRelationship = {
    id: number
    name: DataRelationshipType.RACING_SESSION_HAS_VIDEO
    source_node: RacingSessionNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
