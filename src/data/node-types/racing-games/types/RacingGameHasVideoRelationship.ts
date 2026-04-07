import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingGameNode} from "./RacingGameNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type RacingGameHasVideoRelationship = {
    id: number
    name: DataRelationshipType.RACING_GAME_HAS_VIDEO
    source_node: RacingGameNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
