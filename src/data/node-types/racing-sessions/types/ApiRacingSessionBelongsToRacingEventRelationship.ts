import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiRacingEventNode} from "../../racing-events/types/ApiRacingEventNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiRacingSessionBelongsToRacingEventRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.RACING_SESSION
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.RACING_SESSION_BELONGS_TO_RACING_EVENT
            partner_node: {
                node_type: ApiNodeType.RACING_EVENT
                data: ApiRacingEventNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }
}
