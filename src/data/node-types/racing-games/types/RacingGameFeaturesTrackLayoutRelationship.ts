import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingGameNode} from "./RacingGameNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {TrackLayoutNode} from "../../track-layouts/types/TrackLayoutNode"

export type RacingGameFeaturesTrackLayoutRelationship = {
    id: number
    name: DataRelationshipType.RACING_GAME_FEATURES_TRACK_LAYOUT
    source_node: RacingGameNode
    source_node_type: DataNodeType.RACING_GAME
    partner_node: TrackLayoutNode
    partner_node_type: DataNodeType.TRACK_LAYOUT
    created_at: string
    updated_at: string
}
