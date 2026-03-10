import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiGamingPlatformNode} from "../../gaming-platforms/types/ApiGamingPlatformNode"

export type ApiRacingGameReleasedOnGamingPlatformRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'released-on-gaming-platform'
        partner_node: {
            node_type: ApiNodeType.GAMING_PLATFORM
            data: ApiGamingPlatformNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
