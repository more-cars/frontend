import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiTrackLayoutNode} from "../../track-layouts/types/ApiTrackLayoutNode"

export type ApiLapTimeAchievedOnTrackLayoutRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'achieved-on-track-layout'
        partner_node: {
            node_type: ApiNodeType.TRACK_LAYOUT
            data: ApiTrackLayoutNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
