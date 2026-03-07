import type {ApiRaceTrackNode} from "../../race-tracks/types/ApiRaceTrackNode"

export type ApiTrackLayoutBelongsToRaceTrackRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'belongs-to-race-track'
        partner_node: {
            node_type: 'race track'
            data: ApiRaceTrackNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
