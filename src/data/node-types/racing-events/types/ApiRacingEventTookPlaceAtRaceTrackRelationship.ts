import type {ApiRaceTrackNode} from "../../race-tracks/types/ApiRaceTrackNode"

export type ApiRacingEventTookPlaceAtRaceTrackRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'took-place-at-race-track'
        relationship_partner: {
            node_type: 'race track'
            data: ApiRaceTrackNode['data']
        }
        created_at: string
        updated_at: string
    }
}
