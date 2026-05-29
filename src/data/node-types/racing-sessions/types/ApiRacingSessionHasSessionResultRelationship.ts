import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiSessionResultNode} from "../../session-results/types/ApiSessionResultNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiRacingSessionHasSessionResultRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.RACING_SESSION
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.RACING_SESSION_HAS_SESSION_RESULT
            partner_node: {
                node_type: ApiNodeType.SESSION_RESULT
                data: ApiSessionResultNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }[]
}
