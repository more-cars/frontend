import type {ApiTrackLayoutNode} from "../../track-layouts/types/ApiTrackLayoutNode"

export type ApiRaceTrackHasLayoutRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-layout'
        relationship_partner: {
            node_type: 'track layout'
            data: ApiTrackLayoutNode['data']
        }
        created_at: string
        updated_at: string
    }
}
