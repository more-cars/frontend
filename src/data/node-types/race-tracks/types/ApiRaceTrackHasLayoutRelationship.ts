import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiTrackLayoutNode} from "../../track-layouts/types/ApiTrackLayoutNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiRaceTrackHasLayoutRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.RACE_TRACK
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.RACE_TRACK_HAS_LAYOUT
            partner_node: {
                node_type: ApiNodeType.TRACK_LAYOUT
                data: ApiTrackLayoutNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }[]
}
