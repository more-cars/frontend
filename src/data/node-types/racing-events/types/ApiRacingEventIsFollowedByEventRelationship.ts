import type {ApiRacingEventNode} from "./ApiRacingEventNode"

export type ApiRacingEventIsFollowedByEventRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'is-followed-by-event'
        partner_node: {
            node_type: 'racing event'
            data: ApiRacingEventNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
