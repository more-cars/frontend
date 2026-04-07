import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {GamingPlatformNode} from "./GamingPlatformNode"
import type {RacingGameNode} from "../../racing-games/types/RacingGameNode"

export type GamingPlatformFeaturesRacingGameRelationship = {
    id: number
    name: DataRelationshipType.GAMING_PLATFORM_FEATURES_RACING_GAME
    source_node: GamingPlatformNode
    partner_node: RacingGameNode
    created_at: string
    updated_at: string
}
