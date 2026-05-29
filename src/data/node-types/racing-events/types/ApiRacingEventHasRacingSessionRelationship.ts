import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiRacingSessionNode} from "../../racing-sessions/types/ApiRacingSessionNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiRacingEventHasRacingSessionRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.RACING_EVENT
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.RACING_EVENT_HAS_RACING_SESSION
            partner_node: {
                node_type: ApiNodeType.RACING_SESSION
                data: ApiRacingSessionNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }[]
}
