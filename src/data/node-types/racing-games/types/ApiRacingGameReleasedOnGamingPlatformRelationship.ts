import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiGamingPlatformNode} from "../../gaming-platforms/types/ApiGamingPlatformNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiRacingGameReleasedOnGamingPlatformRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.RACING_GAME
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.RACING_GAME_RELEASED_ON_GAMING_PLATFORM
            partner_node: {
                node_type: ApiNodeType.GAMING_PLATFORM
                data: ApiGamingPlatformNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }[]
}
