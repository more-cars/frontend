import type {ApiTrackLayoutNode} from "../../track-layouts/types/ApiTrackLayoutNode"

export type ApiLapTimeAchievedOnTrackLayoutRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'achieved-on-track-layout'
        relationship_partner: {
            node_type: 'track layout'
            data: ApiTrackLayoutNode['data']
        }
        created_at: string
        updated_at: string
    }
}
