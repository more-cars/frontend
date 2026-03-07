import type {ApiRacingSeriesNode} from "../../racing-series/types/ApiRacingSeriesNode"

export type ApiRacingEventBelongsToRacingSeriesRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'belongs-to-racing-series'
        partner_node: {
            node_type: 'racing series'
            data: ApiRacingSeriesNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
