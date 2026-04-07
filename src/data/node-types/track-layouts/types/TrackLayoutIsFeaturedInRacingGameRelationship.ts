import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {TrackLayoutNode} from "./TrackLayoutNode"
import type {RacingGameNode} from "../../racing-games/types/RacingGameNode"

export type TrackLayoutIsFeaturedInRacingGameRelationship = {
    id: number
    name: DataRelationshipType.TRACK_LAYOUT_IS_FEATURED_IN_RACING_GAME
    source_node: TrackLayoutNode
    partner_node: RacingGameNode
    created_at: string
    updated_at: string
}
