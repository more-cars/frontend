import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiImageNode} from "../../images/types/ApiImageNode"
import {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiGamingPlatformHasImageRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.GAMING_PLATFORM
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.GAMING_PLATFORM_HAS_IMAGE
            partner_node: {
                node_type: ApiNodeType.IMAGE
                data: ApiImageNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }[]
}
