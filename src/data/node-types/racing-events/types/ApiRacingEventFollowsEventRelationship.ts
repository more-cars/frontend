import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiRacingEventNode} from "./ApiRacingEventNode"

export type ApiRacingEventFollowsEventRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'follows-event'
        partner_node: {
            node_type: ApiNodeType.RACING_EVENT
            data: ApiRacingEventNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
