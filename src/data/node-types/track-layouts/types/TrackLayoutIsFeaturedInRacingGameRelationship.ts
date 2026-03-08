import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {TrackLayoutNode} from "./TrackLayoutNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {RacingGameNode} from "../../racing-games/types/RacingGameNode"

export type TrackLayoutIsFeaturedInRacingGameRelationship = {
    id: number
    name: DataRelationshipType.TRACK_LAYOUT_IS_FEATURED_IN_RACING_GAME
    source_node: TrackLayoutNode
    source_node_type: DataNodeType.TRACK_LAYOUT
    partner_node: RacingGameNode
    partner_node_type: DataNodeType.RACING_GAME
    created_at: string
    updated_at: string
}
