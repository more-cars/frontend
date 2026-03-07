import type {ApiRacingSessionNode} from "../../racing-sessions/types/ApiRacingSessionNode"

export type ApiRacingEventHasRacingSessionRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-racing-session'
        partner_node: {
            node_type: 'racing session'
            data: ApiRacingSessionNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
