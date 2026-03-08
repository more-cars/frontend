import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {GamingPlatformNode} from "./GamingPlatformNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {RacingGameNode} from "../../racing-games/types/RacingGameNode"

export type GamingPlatformFeaturesRacingGameRelationship = {
    id: number
    name: DataRelationshipType.GAMING_PLATFORM_FEATURES_RACING_GAME
    source_node: GamingPlatformNode
    source_node_type: DataNodeType.GAMING_PLATFORM
    partner_node: RacingGameNode
    partner_node_type: DataNodeType.RACING_GAME
    created_at: string
    updated_at: string
}
