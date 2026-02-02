import type {ApiRacingEventNode} from "./ApiRacingEventNode"

export type ApiRacingEventIsFollowedByEventRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'is-followed-by-event'
        relationship_partner: {
            node_type: 'racing event'
            data: ApiRacingEventNode['data']
        }
        created_at: string
        updated_at: string
    }
}
