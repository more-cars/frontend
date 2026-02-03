import type {ApiRacingEventNode} from "../../racing-events/types/ApiRacingEventNode"

export type ApiRacingSessionBelongsToRacingEventRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'belongs-to-racing-event'
        relationship_partner: {
            node_type: 'racing event'
            data: ApiRacingEventNode['data']
        }
        created_at: string
        updated_at: string
    }
}
