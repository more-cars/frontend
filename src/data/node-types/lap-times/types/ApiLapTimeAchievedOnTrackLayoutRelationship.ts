import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiTrackLayoutNode} from "../../track-layouts/types/ApiTrackLayoutNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiLapTimeAchievedOnTrackLayoutRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.LAP_TIME_ACHIEVED_ON_TRACK_LAYOUT
        partner_node: {
            node_type: ApiNodeType.TRACK_LAYOUT
            data: ApiTrackLayoutNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
