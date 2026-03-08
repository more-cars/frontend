import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingGameNode} from "./RacingGameNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {GamingPlatformNode} from "../../gaming-platforms/types/GamingPlatformNode"

export type RacingGameReleasedOnGamingPlatformRelationship = {
    id: number
    name: DataRelationshipType.RACING_GAME_RELEASED_ON_GAMING_PLATFORM
    source_node: RacingGameNode
    source_node_type: DataNodeType.RACING_GAME
    partner_node: GamingPlatformNode
    partner_node_type: DataNodeType.GAMING_PLATFORM
    created_at: string
    updated_at: string
}
