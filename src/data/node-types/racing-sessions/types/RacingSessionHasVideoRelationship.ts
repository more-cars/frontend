import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingSessionNode} from "./RacingSessionNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {VideoNode} from "../../videos/types/VideoNode"

export type RacingSessionHasVideoRelationship = {
    id: number
    name: DataRelationshipType.RACING_SESSION_HAS_VIDEO
    source_node: RacingSessionNode
    source_node_type: DataNodeType.RACING_SESSION
    partner_node: VideoNode
    partner_node_type: DataNodeType.VIDEO
    created_at: string
    updated_at: string
}
