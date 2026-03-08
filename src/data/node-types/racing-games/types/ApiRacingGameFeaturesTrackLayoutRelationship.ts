import type {ApiTrackLayoutNode} from "../../track-layouts/types/ApiTrackLayoutNode"

export type ApiRacingGameFeaturesTrackLayoutRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'features-track-layout'
        partner_node: {
            node_type: 'track-layouts'
            data: ApiTrackLayoutNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
