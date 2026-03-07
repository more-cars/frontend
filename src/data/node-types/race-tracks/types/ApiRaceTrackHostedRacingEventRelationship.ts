import type {ApiRacingEventNode} from "../../racing-events/types/ApiRacingEventNode"

export type ApiRaceTrackHostedRacingEventRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'hosted-racing-event'
        partner_node: {
            node_type: 'racing event'
            data: ApiRacingEventNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
