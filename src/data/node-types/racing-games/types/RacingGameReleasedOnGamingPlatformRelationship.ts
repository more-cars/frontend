import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingGameNode} from "./RacingGameNode"
import type {GamingPlatformNode} from "../../gaming-platforms/types/GamingPlatformNode"

export type RacingGameReleasedOnGamingPlatformRelationship = {
    id: number
    name: DataRelationshipType.RACING_GAME_RELEASED_ON_GAMING_PLATFORM
    source_node: RacingGameNode
    partner_node: GamingPlatformNode
    created_at: string
    updated_at: string
}
