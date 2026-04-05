import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingGameNode} from "./RacingGameNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {VideoNode} from "../../videos/types/VideoNode"

export type RacingGameHasVideoRelationship = {
    id: number
    name: DataRelationshipType.RACING_GAME_HAS_VIDEO
    source_node: RacingGameNode
    source_node_type: DataNodeType.RACING_GAME
    partner_node: VideoNode
    partner_node_type: DataNodeType.VIDEO
    created_at: string
    updated_at: string
}
