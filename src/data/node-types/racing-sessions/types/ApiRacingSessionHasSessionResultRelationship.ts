import type {ApiSessionResultNode} from "../../session-results/types/ApiSessionResultNode"

export type ApiRacingSessionHasSessionResultRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-session-result'
        partner_node: {
            node_type: 'session result'
            data: ApiSessionResultNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
