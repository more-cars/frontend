import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiRacingSessionNode} from "../../racing-sessions/types/ApiRacingSessionNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiSessionResultBelongsToRacingSessionRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.SESSION_RESULT
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.SESSION_RESULT_BELONGS_TO_RACING_SESSION
            partner_node: {
                node_type: ApiNodeType.RACING_SESSION
                data: ApiRacingSessionNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }
}
