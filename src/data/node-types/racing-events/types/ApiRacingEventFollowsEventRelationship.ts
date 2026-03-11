import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiRacingEventNode} from "./ApiRacingEventNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiRacingEventFollowsEventRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.RACING_EVENT_FOLLOWS_EVENT
        partner_node: {
            node_type: ApiNodeType.RACING_EVENT
            data: ApiRacingEventNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
