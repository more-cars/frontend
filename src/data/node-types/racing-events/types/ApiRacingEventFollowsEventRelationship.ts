import type {ApiRacingEventNode} from "./ApiRacingEventNode"

export type ApiRacingEventFollowsEventRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'follows-event'
        relationship_partner: {
            node_type: 'racing event'
            data: ApiRacingEventNode['data']
        }
        created_at: string
        updated_at: string
    }
}
