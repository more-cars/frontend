import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingGameNode} from "./RacingGameNode"
import type {TrackLayoutNode} from "../../track-layouts/types/TrackLayoutNode"

export type RacingGameFeaturesTrackLayoutRelationship = {
    id: number
    name: DataRelationshipType.RACING_GAME_FEATURES_TRACK_LAYOUT
    source_node: RacingGameNode
    partner_node: TrackLayoutNode
    created_at: string
    updated_at: string
}
