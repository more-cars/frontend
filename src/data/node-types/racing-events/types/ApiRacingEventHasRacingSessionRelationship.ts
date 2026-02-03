import type {ApiRacingSessionNode} from "../../racing-sessions/types/ApiRacingSessionNode"

export type ApiRacingEventHasRacingSessionRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-racing-session'
        relationship_partner: {
            node_type: 'racing session'
            data: ApiRacingSessionNode['data']
        }
        created_at: string
        updated_at: string
    }
}
