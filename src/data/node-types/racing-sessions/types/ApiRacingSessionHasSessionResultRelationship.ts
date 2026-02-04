import type {ApiSessionResultNode} from "../../session-results/types/ApiSessionResultNode"

export type ApiRacingSessionHasSessionResultRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-session-result'
        relationship_partner: {
            node_type: 'session result'
            data: ApiSessionResultNode['data']
        }
        created_at: string
        updated_at: string
    }
}
